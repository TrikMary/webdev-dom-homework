
const baseApiUrl = "https://wedev-api.sky.pro/api/v2/:mariya-shanina";
// const baseApiUrl = "https://wedev-api.sky.pro/api/v1/:mariya-shanina/comments";
const authUrl = "https://wedev-api.sky.pro/api/user/login";

export let token = null;

//проверка на авторизацию, если вернул не null значит авторизован
// если null то не авторизован
export const getToken = () => {
              return token;
            }

export const setToken = (newToken) => {
              token = newToken;
            }
export let userName;
export const setUserName = (newUserName) => {
              userName = newUserName;
}


export function getCommentFetch () {

    return fetch(`${baseApiUrl} /comments`,
        {
          method: "GET",
        })
        
        .then((response) => {
          if (response.status === 500) {
            throw new Error ("500я проблема сервера")
            
          }
          
         return response.json()
        })
}

export function loginFetch ({ login, password }) {
  return fetch(authUrl, 
    {
    method: "POST",
    body: JSON.stringify({
      login, 
      password,
    })
  }).then((response) => {
    if (response.status === 400) {
      throw new Error ("неверный логин/пароль")
    } 
    else {
      return response.json();
    }
    }).catch((error) => {
    alert ("Вы ввели неправильный логин/пароль, попробуйте снова");
    return;
  })
}

export function postCommentFetch ( {text, name}) {

    return fetch(`${baseApiUrl} /comments`, {
        method: "POST",
        body: JSON.stringify({
          text: text, 
          name: name,
          // включение 500й ошибки
          // forceError: true,
        }),
        headers: {
          Authorization: `Bearer ${token}`,
        }
      
      })
     
      .then((response) => {
        
        if (response.status === 400) {
          throw new Error ("400я проблема с полями")
        } 
        if (response.status === 500) {
          throw new Error ("500я проблема с сервером")
        }
        return response.json();
      })
}

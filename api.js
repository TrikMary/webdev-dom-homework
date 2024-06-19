
const baseApiUrl = "https://wedev-api.sky.pro/api/v2/:mariya-shanina";
const authUrl = "https://wedev-api.sky.pro/api/user/login";
const regUrl = "https://wedev-api.sky.pro/api/user"

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
    } else if (response.status === 500) {
        throw new Error ("500я проблема сервера")
    }
    return response.json()
  }).catch((error) => {
      if (error.message === "неверный логин/пароль") {
        alert ("Вы ввели неправильный логин/пароль, попробуйте снова");           
        return;
      } else { 
        alert ("Что-то пошло не так");
        return;
      } 
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

export function registerFetch ({login, name, password}) {
  return fetch(regUrl , {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
     
  })
 
  .then((response) => {
    
    if (response.status === 400) {
      throw new Error ("400я такой пользователь уже существует")
    }   
    return response.json();
  })
}




const baseApiUrl = "https://wedev-api.sky.pro/api/v1/:mariya-shanina/comments";

export function getCommentFetch () {

    return fetch(baseApiUrl,
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

export function postCommentFetch ( {text, name}) {

    return fetch(baseApiUrl, {
        method: "POST",
        body: JSON.stringify({
          text: text, 
          name: name,
          // включение 500й ошибки
          // forceError: true,
        })
      
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
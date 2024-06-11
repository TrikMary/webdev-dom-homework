import { getCommentFetch, postCommentFetch } from "./api.js";
import { checkInputValue } from "./checkInputValue.js";
import { sanitizeHtml } from "./sanitizeHtml.js";
import { initLikesListeners } from "./initLikesListeners.js";




document.querySelector(".loaderPost").classList.add("loader");
    
   
    let comments = [];

    const baseApiUrl = "https://wedev-api.sky.pro/api/v1/:mariya-shanina/comments";
    const name = document.querySelector(".add-form-name");
    const text = document.querySelector(".add-form-text");
    const list = document.querySelector(".comments");

    function showInputForm () {
      document.querySelector(".loaderPost").classList.add("loader"); // спрятать текст
      document.querySelector(".add-form").classList.remove("invisible"); // показать форму
      console.log("нашлись");
    }

    function hideInputForm () {
        document.querySelector(".loaderPost").classList.remove("loader");
        document.querySelector(".add-form").classList.add("invisible");
        console.log("прячемся");
        }
    
      // *** создаем функцию получения данных с сервера ***

    const getComment = () => {
      getCommentFetch().then((responseData) => {
        
          const appComments = responseData.comments.map((comment) => {
            return {
              name: comment.author.name,
              date: new Date(comment.date),
              text: comment.text,
              likes: comment.likes, //пока заглушка
              isliked: false,
            };
          });
          // получили данные и рендерим их в приложении
          comments = appComments;
          document.querySelector(".loaderFirst").classList.add("loader");
          console.log(appComments);
          
          renderComments();
        }).catch((error) => {
          if (error.message === "500я проблема сервера") {
            alert ("Сервер сломался");           
            return;
          } else {
            document.querySelector(".loaderFirst").textContent = "Комментарии не загрузились..."
          }
        })
      
    }
     getComment ();
    
    const postComment = () => {
        hideInputForm();
        
        postCommentFetch( {
            text: sanitizeHtml(text.value), 
            name: sanitizeHtml(name.value),
        }).then((responseData) => {
            console.log(responseData);
            // Очищаем поля ввода от прошлых вводов
            name.value = "";
            text.value = "";
        }).then(() => {
                    
            getComment();
        })
        
        .catch((error) => {
                    
            if (error.message === "400я проблема с полями") {
            alert ("Некоректно заполнены поля ввода");
            return;
            }
            if (error.message === "500я проблема с сервером") {
            alert ("Сервер временно не работает");
            return;
            } 
            alert ("Хм, что-то пошло не так...");
            
        })
        .finally (() => showInputForm());
        
    
    }
    

    

    // работа счетчиков кликов
    

    
    // создаем или обновляем основной массив комментариев
    const renderComments = () => {
      list.innerHTML = comments.map((comment, index) => {
        return `
        <li class="comment" data-index="${index}">
          <div class="comment-header">
            <div>${comment.name}</div>
            <div>${comment.date.toLocaleDateString()} ${comment.date.toLocaleTimeString()}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${comment.text}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.likes}</span>лайка
              <button data-index="${index}" class="like-button ${
                comment.isLiked ? "-active-like" : ""
            }"></button>
              </div>
            </div>
          </li>
        `   
         
      }).join("");

        
      initLikesListeners ({renderComments, comments});
      console.log(comments);

      

      // блок для создания цитаты в комментариях
      for (const comment of document.querySelectorAll(".comment")) {
        comment.addEventListener("click", () => {
          const quoteText = comments[comment.dataset.index];
          text.value = `%BEGIN_QUOTE > ${quoteText.text}END_QUOTE% ${quoteText.name},`
        });
      }

    }
    
    // renderComments();
    
    
    // проверяем и подсвечиваем пустые поля, после добавляем в массив
    const addButton = document.querySelector(".add-form-button");

    addButton.addEventListener("click", () => {
       checkInputValue({name, text, postComment})
    });
    
    console.log("It works!");
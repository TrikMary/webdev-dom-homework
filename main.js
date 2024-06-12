import { getCommentFetch, postCommentFetch } from "./api.js";
import { checkInputValue } from "./checkInputValue.js";
import { sanitizeHtml } from "./sanitizeHtml.js";
import { renderComments } from "./renderComments.js";




document.querySelector(".loaderPost").classList.add("loader");
    

export let comments = [];

const baseApiUrl = "https://wedev-api.sky.pro/api/v1/:mariya-shanina/comments";
const name = document.querySelector(".add-form-name");
export const text = document.querySelector(".add-form-text");
export const list = document.querySelector(".comments");

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
    
    postCommentFetch ( {
        text: sanitizeHtml(text.value), 
        name: sanitizeHtml(name.value),
    }).then((responseData) => {
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

// проверяем и подсвечиваем пустые поля, после добавляем в массив
const addButton = document.querySelector(".add-form-button");

addButton.addEventListener("click", () => {
    checkInputValue({name, text, postComment})
});

console.log("It works!");
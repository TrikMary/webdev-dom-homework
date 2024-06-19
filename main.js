import { getCommentFetch } from "./api.js";
import { checkInputValue } from "./checkInputValue.js";
import { renderComments } from "./renderComments.js";
import { postComment } from "./postComment.js";
import { showLoginForm } from "./login.js";
import { showAddForm } from "./showAddForm.js";



// document.querySelector(".loaderPost").classList.add("loader");


export let comments = [];



export const name = document.querySelector(".add-form-name");
export const text = document.querySelector(".add-form-text");
export const list = document.querySelector(".comments");


// первая загрузка формы при ссылке с главной странички
const showStartFormElement = document.getElementById("show-start-form");
  showStartFormElement.addEventListener("click", () => {
    hideComments ();
    showLoginForm();
  })

export function hideComments () {
  document.querySelector(".comments").classList.add("invisible");
}
export function findComments () {
  document.querySelector(".comments").classList.remove("invisible");
}

export const getComment = () => {

  getCommentFetch().then((responseData) => {
    
    const appComments = responseData.comments.map((comment) => {
      return {
          name: comment.author.name,
          date: new Date(comment.date),
          text: comment.text,
          likes: comment.likes,
          isLiked: comment.isLiked,
      }
    });

    comments = appComments;
    document.querySelector(".loaderFirst").classList.add("loader");
          
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
// showAddForm();


const addButton = document.querySelector(".add-form-button");

addButton.addEventListener("click", () => {
    checkInputValue({name, text, postComment})
});

 






console.log("It works!");
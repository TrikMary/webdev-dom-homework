import { getCommentFetch } from "./api.js";
import { checkInputValue } from "./checkInputValue.js";
import { renderComments } from "./renderComments.js";
import { postComment } from "./postComment.js";
import { showLoginForm } from "./login.js";



document.querySelector(".loaderPost").classList.add("loader");
    

export let comments = [];


export const name = document.querySelector(".add-form-name");
export const text = document.querySelector(".add-form-text");
export const list = document.querySelector(".comments");


// первая загрузка формы при ссылке с главной странички
const showStartFormElement = document.getElementById("show-start-form");
  showStartFormElement.addEventListener("click", () => {
    document.querySelector(".comments").classList.add("invisible");
    showLoginForm();
  })




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


const addButton = document.querySelector(".add-form-button");

addButton.addEventListener("click", () => {
    checkInputValue({name, text, postComment})
});

 

export const showRegisterForm = () => {
  const showRegisterFormElement = document.getElementById("customer-form");

  const registerHtml = `
  <div class="login-form">
  <h1>Форма ввода </h1>
  <input
    type="text"
    class="login-form-input login-form-login"
    placeholder="Введите логин"
  />

  <input
    type="text"
    class="login-form-input register-form-name"
    placeholder="Введите имя"
  />

  <input
    type="text"
    class="login-form-input login-form-password"
    placeholder="Введите пароль"
  />
            
  <div class="login-form-row">
   <div>
        <button class="register-form-button" >Зарегистрироваться</button>
    </div>
    <div>
    <h2 class="change-form-text" id="change-form">Войти</h2> 
    </div>
  </div>
  
  `;
  showRegisterFormElement.innerHTML = registerHtml;

  const changeLoginToReg = document.getElementById("change-form");
    changeLoginToReg.addEventListener("click", () => {
      showLoginForm();
    })
}




console.log("It works!");
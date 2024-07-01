import { postComment } from "./postComment.js";

// наша проверка полей ввода

// короткая проверка комментария
export function shortCheckInputValue ( {text} ) {
     text.classList.remove("error");
     if (!text.value.trim()) {
     text.classList.add("error");
     return;
     } else {      
     postComment({text});
     }
     
}    

// проверка при регистрации
// export function registerCheckInputValue ( {regName, regLogin, regPassword} ) {
     
//      regName.classList.remove("error");
//      regLogin.classList.remove("error");
//      regPassword.classList.remove("error")

//      if (!regName.value.trim() && !regLogin.value.trim() && !regPassword.value.trim()) {
//      regName.classList.add("error");
//      regLogin.classList.add("error");
//      regPassword.classList.add("error")
//      return;
//      } else if (!regName.value.trim()) {
//      regName.classList.add("error");
//      return;
//      } else if (!regLogin.value.trim()) {
//      regLogin.classList.add("error");
//      return;
//      } else if (!regPassword.value.trim()) {
//      regPassword.classList.add("error");
//      return;
//      }
     
// }  


// проверка полей авторизации
// export function loginCheckInputValue ( { logLogin, logPassword, loginFetch } ) {
     
//      logLogin.classList.remove("error");
//      logPassword.classList.remove("error");
//      if (!logLogin.value.trim() && !logPassword.value.trim()) {
//      logLogin.classList.add("error");
//      logPassword.classList.add("error");
//      return;
//      } else if (!logLogin.value.trim()) {
//      logLogin.classList.add("error");
//      return;
//      } else if (!logPassword.value.trim()) {
//      logPassword.classList.add("error");
//      return;
//      } else {
//           loginFetch();
//      }
// }     


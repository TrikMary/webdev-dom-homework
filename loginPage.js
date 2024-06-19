
// import { loginAuth, setToken, token } from "./api.js";
// import { showCommentForm } from "./showCommentForm.js";





// export const showLoginPage = () => {
//   const showLoginPageElement = document.getElementById("customer-form");
//   const loginHtml = `
//     <div class="container">
            
//     <div class="login-form">
//         <input
//         type="text"
//         class="login-form-input login-form-login" id="login-form-input"
//         placeholder="Введите логин"
//         />

//         <input
//         type="text"
//         class="login-form-input login-form-password" id="login-form-password"
//         placeholder="Введите пароль"
//         />
                
//         <div class="login-form-row">
//         <button class="login-form-button" id="login-form-button">Войти</button>
//         </div>
//     </div>
    
    
//     </div>
//     `;
//     showLoginPageElement.innerHTML = loginHtml;

//     const loginButtonElement = document.getElementById("login-form-button");
//     const loginInputElement = document.getElementById("login-form-input");
//     const passwordInputElement = document.getElementById("login-form-password");

//     loginButtonElement.addEventListener("click", () => {
//         loginAuth ({
//             login: loginInputElement.value,
//             password: passwordInputElement.value,
//         }).then((responseData) => {
//             setToken(responseData.user.token);
//             // если токен пришел сразу показываем форму
//             showCommentForm()
                     
//         })
//     });
// }

// export function loginAuth ({ login, password}) {
//     return fetch(authUrl, {
//       method: "POST",
//       body: JSON.stringify({
//         login: login, 
//         password: password,
//       })
//     })
   
//     .then((response) => {
      
//       if (response.status === 400) {
//         throw new Error ("неверный логин/пароль")
//       } 
//         return response.json();
//     }).catch((error) => {
//       alert ("Вы ввели неправильный логин/пароль, попробуйте снова");
//       return;
//     })
//   }
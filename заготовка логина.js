
// import { loginAuth, setToken, token } from "./api.js";
// import { showCommentForm } from "./showCommentForm.js";








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
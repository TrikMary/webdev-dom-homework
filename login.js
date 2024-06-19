import { loginFetch, setUserName, setToken, token, userName } from "./api.js";
import { showRegisterForm } from "./showRegisterForm.js"

import { showAddForm } from "./showAddForm.js";
import { findComments, } from "./main.js";


// логин форма
export function showLoginForm () {
    const showLoginFormElement = document.getElementById("customer-form");
    
    const loginHtml = `            
        <div class="login-form">
            <h1>Форма ввода </h1>
            <input
            type="text"
            class="login-form-input login-form-login" id="login-form-login"
            placeholder="Введите логин"
            />
  
            <input
            type="text"
            class="login-form-input login-form-password" id="login-form-password"
            placeholder="Введите пароль"
            />
                    
            <div class="login-form-row">
            <div>
            <button class="login-form-button" id="login-form-button">Войти</button>
            </div>
            <div>
            <h2 class="change-form-text" id="change-form">Зарегистрироваться</h2> 
            </div>
            </div>
        </div>
        
        
        </div>
        `;
      showLoginFormElement.innerHTML = loginHtml;
  
      const changeLoginToReg = document.getElementById("change-form");
      
      changeLoginToReg.addEventListener("click", () => {
        showRegisterForm();
      });

    const loginButtonElement = document.getElementById("login-form-button");
    const loginLoginElement = document.getElementById("login-form-login");
    const loginPasswordElement = document.getElementById("login-form-password");

      loginButtonElement.addEventListener("click", () => {
        loginFetch ({
              login: loginLoginElement.value,
              password: loginPasswordElement.value,
          }).then((responseData) => {
          
          console.log(token);
          console.log(responseData);
          setUserName(responseData.user.name);
          console.log(userName);
          setToken(responseData.user.token);
          console.log(token);
                     
        })
        .then(() => {

            findComments();
            showAddForm();
            
        });
    });
   
}







import { showLoginForm } from "./login.js";

export function showRegisterForm  ()  {
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
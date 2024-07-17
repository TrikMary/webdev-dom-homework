import { registerFetch } from "./api.js";
import { showLoginForm } from "./login.js";
import { setToken, setUserName } from "./api.js";
import { findComments } from "./main.js";
import { showAddForm } from "./showAddForm.js";

export function showRegisterForm() {
    const showRegisterFormElement = document.getElementById("customer-form");

    const registerHtml = `
    <div class="login-form">
    <h1>Форма ввода </h1>
    <input
      type="text"
      class="login-form-input login-form-login"
      id="login-form-login"
      placeholder="Введите логин"
    />
  
    <input
      type="text"
      class="login-form-input register-form-name"
      id="register-form-name"
      placeholder="Введите имя"
    />
  
    <input
      type="text"
      class="login-form-input login-form-password"
      id="login-form-password"
      placeholder="Введите пароль"
    />
              
    <div class="login-form-row">
     <div>
          <button class="register-form-button" id="register-form-button" >Зарегистрироваться</button>
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
    });

    const regButtonElement = document.getElementById("register-form-button");
    const regLoginElement = document.getElementById("login-form-login");
    const regPasswordElement = document.getElementById("login-form-password");
    const regNameElement = document.getElementById("register-form-name");

    // переменные для проверки
    const regName = regNameElement;
    const regLogin = regLoginElement;
    const regPassword = regPasswordElement;

    const regCheckInputValue = () => {
        regLogin.classList.remove("error");
        regName.classList.remove("error");
        regPassword.classList.remove("error");

        if (
            !regName.value.trim() &&
            !regLogin.value.trim() &&
            !regPassword.value.trim()
        ) {
            regName.classList.add("error");
            regLogin.classList.add("error");
            regPassword.classList.add("error");
            return;
        } else if (!regName.value.trim() && !regLogin.value.trim()) {
            regName.classList.add("error");
            regLogin.classList.add("error");
        } else if (!regLogin.value.trim() && !regPassword.value.trim()) {
            regLogin.classList.add("error");
            regPassword.classList.add("error");
        } else if (!regName.value.trim() && !regPassword.value.trim()) {
            regName.classList.add("error");
            regPassword.classList.add("error");
        } else if (!regLogin.value.trim()) {
            regLogin.classList.add("error");
            return;
        } else if (!regName.value.trim()) {
            regName.classList.add("error");
            return;
        } else if (!regPassword.value.trim()) {
            regPassword.classList.add("error");
            return;
        } else {
            registerFetch({
                login: regLoginElement.value,
                name: regNameElement.value,
                password: regPasswordElement.value,
            })
                .then((responseData) => {
                    setToken(responseData.user.token);
                    setUserName(responseData.user.name);
                })
                .then(() => {
                    findComments();
                    showAddForm();
                });
        }
    };
    regButtonElement.addEventListener("click", () => {
        regCheckInputValue();
    });
}

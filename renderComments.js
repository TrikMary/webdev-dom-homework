import { getToken, token } from "./api.js";
import { initLikesListeners } from "./initLikesListeners.js";
import { comments } from "./main.js";
import { list } from "./main.js";
import { sanitizeHtml } from "./sanitizeHtml.js";
import { format } from "date-fns";

// {/* <div>${comment.date.toLocaleDateString()} ${comment.date.toLocaleTimeString()}</div> */}

export const renderComments = () => {
    list.innerHTML = comments
        .map((comment, index) => {
            const createDate = format(
                new Date(comment.date),
                "yyyy-MM-dd hh.mm.ss",
            );
            return `
      <li class="comment" data-index="${index}">
        <div class="comment-header">
          <div>${sanitizeHtml(comment.name)}</div>
          <div>${createDate}</div>
        </div>
        <div class="comment-body">
          <div class="comment-text" data-index="${index}">
            ${comment.text}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${comment.likes}</span>
            <button data-like="${comment.likes}" data-id="${comment.id}" class="like-button 
            ${comment.isLiked ? "-active-like" : "like-button"}
            ">
            </button>
          </div>
          </div>
        </li>
      `;
        })
        .join("");

    initLikesListeners();

    const commentElement = document.querySelectorAll(".comment");

    // Реализуем цитату только для авторизованных пользователей

    getToken();
    console.log("вызвали токен в комментах");
    console.log(token);

    // Если есть токен, то  работает цитата
    // используем логический оператор: если в токене ничего нет,
    // то вычисления дальше не пойдут
    // нет токена => нет клика
    token && quoteListener();

    function quoteListener() {
        for (let comment of commentElement) {
            comment.addEventListener("click", () => {
                const quoteText = comments[comment.dataset.index];
                const value = `%BEGIN_QUOTE > ${quoteText.text}END_QUOTE% ${quoteText.name}`;

                const inputText = document.querySelector(".add-form-text");
                inputText.value = value;
            });
        }
    }
};

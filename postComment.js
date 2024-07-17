import { hideInputForm, showInputForm } from "./visibleInputForm.js";
import { postCommentFetch, userName } from "./api.js";
import { getComment } from "./main.js";
import { sanitizeHtml } from "./sanitizeHtml.js";

export const postComment = ({ text }) => {
    hideInputForm();

    postCommentFetch({
        text: sanitizeHtml(text.value),
        name: userName,
    })
        .then(() => {
            // Очищаем поля ввода от прошлых вводов
            // name.value = "";
            text.value = "";
        })
        .then(() => {
            getComment();
        })

        .catch((error) => {
            if (error.message === "400я проблема с полями") {
                alert("Некоректно заполнены поля ввода");
                return;
            }
            if (error.message === "500я проблема с сервером") {
                alert("Сервер временно не работает");
                return;
            }
            alert("Хм, что-то пошло не так...");
        })
        .finally(() => showInputForm());
};

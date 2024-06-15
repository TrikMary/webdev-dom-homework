import { hideInputForm, showInputForm } from "./visibleInputForm.js";
import { postCommentFetch } from "./api.js";
import { getComment, text, name } from "./main.js";
import { sanitizeHtml } from "./sanitizeHtml.js";
 

export const postComment = () => {
    hideInputForm();
    
    postCommentFetch ( {
        text: sanitizeHtml(text.value), 
        name: sanitizeHtml(name.value),
    }).then((responseData) => {
        // Очищаем поля ввода от прошлых вводов
        name.value = "";
        text.value = "";
    }).then(() => {
                
        getComment();
    })
    
    .catch((error) => {
                
        if (error.message === "400я проблема с полями") {
        alert ("Некоректно заполнены поля ввода");
        return;
        }
        if (error.message === "500я проблема с сервером") {
        alert ("Сервер временно не работает");
        return;
        } 
        alert ("Хм, что-то пошло не так...");
        
    })
    .finally (() => showInputForm());

}
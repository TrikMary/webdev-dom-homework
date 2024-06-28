import { initLikesListeners } from "./initLikesListeners.js";
import { quoteListener } from "./initQuoteListener.js";
// import { initQuoteListener } from "showAddForm.js";
import { comments} from "./main.js";
import { list } from "./main.js";
// import { showAddForm } from "./showAddForm.js";



export const renderComments = () => {
    list.innerHTML = comments.map((comment, index) => {
      return `
      <li class="comment" data-index="${index}">
        <div class="comment-header">
          <div>${comment.name}</div>
          <div>${comment.date.toLocaleDateString()} ${comment.date.toLocaleTimeString()}</div>
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
      `   
        
    }).join("");


     

    // app.innerHTML = ` 
    // <ul class="comments">
    // ${commentsHtml}
    // </ul>
    // ${token ? formHtml : authHtml}
  
      
    initLikesListeners (); 


    // *************************
    // TODO: надо как-то заставить цитату работать и тут в том числе,
    // но я не понимаю как передать переменные ей тут, но взятые из формы ввода комментария

    //*************************** */
    // quoteListener ( {text});
      
    

}
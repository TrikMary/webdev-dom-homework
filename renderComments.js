import { initLikesListeners } from "./initLikesListeners.js";
import { comments} from "./main.js";
import { list } from "./main.js";
import { sanitizeHtml } from "./sanitizeHtml.js";





export const renderComments = () => {
    list.innerHTML = comments.map((comment, index) => {
      return `
      <li class="comment" data-index="${index}">
        <div class="comment-header">
          <div>${sanitizeHtml(comment.name)}</div>
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


     
   
  
      
    initLikesListeners (); 

    const commentElement = document.querySelectorAll(".comment");
    
    const quoteListener = () => {
      for (let comment of commentElement) {
        
        comment.addEventListener("click", () => {
        const quoteText = comments[comment.dataset.index];
        const value = `%BEGIN_QUOTE > ${quoteText.text}END_QUOTE% ${quoteText.name}`;

        const inputText = document.querySelector(".add-form-text");
        inputText.value = value;
      });
    };
  }
 
  quoteListener();

}
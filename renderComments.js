import { initLikesListeners } from "./initLikesListeners.js";
import { initQuoteListener } from "./initQuoteListener.js";
import { comments } from "./main.js";
import { list } from "./main.js";



export const renderComments = () => {
    list.innerHTML = comments.map((comment, index) => {
      return `
      <li class="comment" data-index="${index}">
        <div class="comment-header">
          <div>${comment.name}</div>
          <div>${comment.date.toLocaleDateString()} ${comment.date.toLocaleTimeString()}</div>
        </div>
        <div class="comment-body">
          <div class="comment-text">
            ${comment.text}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${comment.likes}</span>
            <button data-index="${index}" class="like-button ${
              comment.isLiked ? "-active-like" : ""
          }"></button>
            </div>
          </div>
        </li>
      `   
        
    }).join("");
        
    initLikesListeners ();
  
    initQuoteListener ();
  
  }
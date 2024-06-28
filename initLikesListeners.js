
import { likeFetch } from "./api.js";
import { getComment } from "./main.js";
import { renderComments } from "./renderComments.js";

export function initLikesListeners () {
    const likeButtonsElements = document.querySelectorAll(".like-button");
    
    
    for (let likeButtonElement of likeButtonsElements) {
      likeButtonElement.addEventListener("click", (event) =>{
        event.stopPropagation();
        const id = likeButtonElement.dataset.id;
        likeFetch({id}).then((responseData) => {
          console.log(responseData);
          
          //// Может я что-то тут неправильно обрабатываю?

          if (responseData.result.isLiked === true ) {
            likeButtonElement.classList.add("-active-like");
          }
           else {
            likeButtonElement.classList.remove("-active-like")
           }
            
        
        }).then(() => {
          getComment();
          
        })
        

        // const comment = comments[index];
        
               
        // comment.likes = comment.isLiked
        //   ? comment.likes -1
        //   : comment.likes +1;

        // comment.isLiked = !comment.isLiked;
        // getComment();
        renderComments(); 

      });
      
    }
    
  }  
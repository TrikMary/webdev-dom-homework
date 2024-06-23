import { likeFetch } from "./api.js";

import { renderComments } from "./renderComments.js";

export function initLikesListeners ({idComment}) {
    const likeButtonsElements = document.querySelectorAll(".like-button");

    for (let likeButtonElement of likeButtonsElements) {
      likeButtonElement.addEventListener("click", (event) =>{
        event.stopPropagation();
        
        likeFetch({idComment}).then((responseData) => {
          console.log(responseData);
        })
        // const index = likeButtonElement.dataset.index

        // const comment = comments[index];
        
               
        // comment.likes = comment.isLiked
        //   ? comment.likes -1
        //   : comment.likes +1;

        // comment.isLiked = !comment.isLiked;
        
        renderComments({ idComment }); 

      })
    }
  }  
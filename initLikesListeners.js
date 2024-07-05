
import { likeFetch } from "./api.js";
import { getComment } from "./main.js";


export function initLikesListeners () {
    const likeButtonsElements = document.querySelectorAll(".like-button");
    
    
    for (let likeButtonElement of likeButtonsElements) {
      likeButtonElement.addEventListener("click", (event) =>{
        event.stopPropagation();
        const id = likeButtonElement.dataset.id;
        likeFetch({id}).then((responseData) => {
          console.log(responseData);
        

        }).then(() => {
          getComment();
          
        })    

      });
      
    }
    
  }  
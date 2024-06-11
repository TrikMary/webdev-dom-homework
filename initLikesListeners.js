

export function initLikesListeners ({renderComments, comments}) {
    const likeButtonsElements = document.querySelectorAll(".like-button");

    for (let likeButtonElement of likeButtonsElements) {
      likeButtonElement.addEventListener("click", (event) =>{
        event.stopPropagation();
        
        const index = likeButtonElement.dataset.index

        const comment = comments[index];

        comment.likes = comment.isLiked
          ? comment.likes -1
          : comment.likes +1;

        comment.isLiked = !comment.isLiked;

        renderComments(); 

      })
    }
  }  
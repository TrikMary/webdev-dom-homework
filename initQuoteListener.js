import { comments } from "./main.js";


export function initQuoteListener ({ text }) {
  
    for (const comment of document.querySelectorAll(".comment")) {
      comment.addEventListener("click", () => {
        const quoteIndex = comment.dataset.index;
        
        
        text.value = `%BEGIN_QUOTE > ${comments[quoteIndex].text}END_QUOTE% ${comments[quoteIndex].name},
        `
      });
    }  
  }
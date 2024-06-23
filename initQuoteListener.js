import { comments } from "./main.js";


export function initQuoteListener () {
  
    for (const comment of document.querySelectorAll(".comment")) {
      comment.addEventListener("click", () => {
        const quoteText = comments.dataset.text;
        text.value = `%BEGIN_QUOTE > ${quoteText.text}END_QUOTE% ${quoteText.name},
        `
      });
    }  
  }
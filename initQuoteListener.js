import { comments } from "./main.js";
// import { text } from "./showAddForm.js";

export function initQuoteListener () {
    for (const comment of document.querySelectorAll(".comment")) {
      comment.addEventListener("click", () => {
        const quoteText = comments[comment.dataset.index];
        text.value = `%BEGIN_QUOTE > ${quoteText.text}END_QUOTE% ${quoteText.name},`
      });
    }  
  }
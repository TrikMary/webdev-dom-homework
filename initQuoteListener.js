import { comments } from "./main.js";





// export function initQuoteListener ({ text, comment }) {
    
//         const quoteIndex = comment.dataset.index;
        
        
//         text.value = `%BEGIN_QUOTE > ${comments[quoteIndex].text}END_QUOTE% ${comments[quoteIndex].name},
//         `
// }

// !!! Сейчас работает эта цитата

export function quoteListener ( { text}) {
        for (const comment of document.querySelectorAll(".comment")) {
                comment.addEventListener("click", () => {
                        console.log("цитатка с модуля")
                const quoteText = comments[comment.dataset.index];
                text.value = `%BEGIN_QUOTE > ${quoteText.text}END_QUOTE% ${quoteText.name},`
                });
        }  
}


        // const quoteListener = () => {
//         for (const comment of document.querySelectorAll(".comment")) {
            
//             comment.addEventListener("click", () => {
//               console.log("цитатка");
//             initQuoteListener ( { text, comment });
//             });
      
          
        
//         }
//         }
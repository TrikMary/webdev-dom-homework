
import { userName } from "./api.js"
// import {  quoteListener } from "./initQuoteListener.js"

import { shortCheckInputValue } from "./checkInputValue.js"
import { renderComments } from "./renderComments.js"
import { initLikesListeners } from "./initLikesListeners.js"
// import { comments } from "./main.js"










export const hideAddForm = () => {
            document.getElementById("add-form").classList.add("invisible")
}
export const findAddForm = () => {
    document.getElementById("add-form").classList.remove("invisible")
}

export const showAddForm = () => {
    
    
    const showAddFormElement = document.getElementById("customer-form");


        
    const addFormHtml = `
        
    <div class="add-form" id="add-form" >  
        <input
            type="text"
            class="add-form-name"            
            value = "${userName}"
            readonly
        />
        <textarea
            type="textarea"
            class="add-form-text"
            placeholder="Введите ваш коментарий"
            rows="4"
        ></textarea>
        <div class="add-form-row">
            <button class="add-form-button" >Написать</button>
        </div>    
        <div class="loaderPost loader"> 
            <br> Коментарий добавляется...
        </div>     
    </div>
    `;

    showAddFormElement.innerHTML = addFormHtml;
    

    const text = document.querySelector(".add-form-text");
    const addButton = document.querySelector(".add-form-button");

    addButton.addEventListener("click", () => {
        shortCheckInputValue({ text });
    });
    
    // const answer = () => {
    // for (const comment of document.querySelectorAll(".comment")) {
        
    //     comment.addEventListener("click", () => {
    //       console.log("цитатка");
    //     initQuoteListener ( { text, comment });
    //     });
  
      
    
    // }
    // }
    
  renderComments();
  initLikesListeners();
//   answer();

//  чиним
//   quoteListener( { text });
        
      
        
       
    
    
    
    
}



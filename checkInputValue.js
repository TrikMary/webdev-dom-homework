// наша проверка полей ввода

export function checkInputValue ( {name, text, postComment} ) {
     
     name.classList.remove("error");
     text.classList.remove("error");
     if (!name.value.trim() && !text.value.trim()) {
     name.classList.add("error");
     text.classList.add("error");
     return;
     } else if (!name.value.trim()) {
     name.classList.add("error");
     return;
     } else if (!text.value.trim()) {
     text.classList.add("error");
     return;
     } else {      
     postComment();
     }
     
}    
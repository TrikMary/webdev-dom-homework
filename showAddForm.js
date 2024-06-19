

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
            placeholder="Введите ваше имя"
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
        </div>
        `;

        showAddFormElement.innerHTML = addFormHtml;
     };
    //  <div class="loaderPost"> 
    //         <br> Коментарий добавляется...
    //     </div> 



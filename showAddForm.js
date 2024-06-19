export const showAddForm = () => {

       const showAddFormElement = document.getElementById("add-form");

        document.getElementById("add-form").classList.add("invisible")


        const addFormHtml = `
            
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
        <div class="loaderPost"> 
            <br> Коментарий добавляется...
        </div>   
        `;

        showAddFormElement.innerHTML = addFormHtml;
     };



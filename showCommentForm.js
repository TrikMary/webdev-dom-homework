export const showCommentForm = () => {
    const showCommentFormElement = document.getElementById("customer-form");
    const commentFormHtml = `
      <div class="add-form">
        <input
          type="text"
          class="add-form-name"
          placeholder="Введите ваше имя"
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
    showCommentFormElement.innerHTML = commentFormHtml;
}
/* <div class="loaderPost"> 
        <br> Коментарий добавляется...
      </div>
     */
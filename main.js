


document.querySelector(".loaderPost").classList.add("loader");
    
   
    let comments = [];

    const baseApiUrl = "https://wedev-api.sky.pro/api/v1/:mariya-shanina/comments";
    const name = document.querySelector(".add-form-name");
    const text = document.querySelector(".add-form-text");
    const list = document.querySelector(".comments");

    function showInputForm () {
      document.querySelector(".loaderPost").classList.add("loader"); // спрятать текст
      document.querySelector(".add-form").classList.remove("invisible"); // показать форму
      console.log("нашлись");
    }
    

    // защита строки от ввода тегов
    const sanitizeHtml = (htmlString) => {
      return htmlString.replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "quot;")
        .replaceAll("%BEGIN_QUOTE", "<div class='quote'>")
        .replaceAll("END_QUOTE%", "</div>");
    }; 

        // Запросы в API - ассинхронные, мы не знаем как долго будет выполняться
    // запрос может выполняться (секунды, и даже минуты)
    
    // fetch - запускает выполнение запроса к api
    
    
      // *** создаем функцию получения данных с сервера ***

    const getComment = () => {
      return fetch(baseApiUrl,
      {
        method: "GET",

      })
      // подписываемся на успешное завершение запроса с помощью then
      .then((response) => {
        if (response.status === 500) {
          throw new Error ("500я проблема сервера")
          
        }
        // Преобразовываем "сырые" данные от API в json формат
       return response.json()
      })
        //Подписываемся на результат преобразования
        .then((responseData) => {
          console.log(responseData);

          //Преобразовываем данные из формата api в формат приложения
          const appComments = responseData.comments.map((comment) => {
            return {
              //Достаем имя автора
              name: comment.author.name,
              // Преобразовываем дату-строку в Date
              date: new Date(comment.date),
              text: comment.text,
              likes: comment.likes, //пока заглушка
              isliked: false,
            };
          });
          // получили данные и рендерим их в приложении
          comments = appComments;
          document.querySelector(".loaderFirst").classList.add("loader");
          console.log(appComments);
          
          renderComments();
        }).catch((error) => {
          if (error.message === "500я проблема сервера") {
            alert ("Сервер сломался");
           
            return;
          } else {
            document.querySelector(".loaderFirst").textContent = "Комментарии не загрузились..."
          }
        })
      
    }
     getComment ();
    


    // отправка комментариев на сервер
    
      const postComment = () => {
        document.querySelector(".loaderPost").classList.remove("loader");
        document.querySelector(".add-form").classList.add("invisible");
        console.log("прячемся");
        return fetch(baseApiUrl, {
          method: "POST",
          body: JSON.stringify({
            text: sanitizeHtml(text.value), 
            name: sanitizeHtml(name.value),
            // включение 500й ошибки
            // forceError: true,
          })
        // а в теле строка "text": "Текст коммента", "name": "Глеб Ф."
        })
       
        .then((response) => {
          
          if (response.status === 400) {
            throw new Error ("400я проблема с полями")
          } 
          if (response.status === 500) {
            throw new Error ("500я проблема с сервером")
          }
          return response.json();
        })
        .then((responseData) => {
         // пока прячем, вынесла в finally
          // showInputForm();
          // ответ от сервера
          console.log(responseData);
           // Очищаем поля ввода от прошлых вводов
          name.value = "";
          text.value = "";
        }).then(() => {
          // GET запрос для получения списка комментариев, рендерим их
          
          getComment();
        })
        
        .catch((error) => {
          // пока прячем, вынесла в finally
          //  showInputForm();
          
          if (error.message === "400я проблема с полями") {
            alert ("Некоректно заполнены поля ввода");
            return;
          }
          if (error.message === "500я проблема с сервером") {
            alert ("Сервер временно не работает");
            return;
          } 
          alert ("Хм, что-то пошло не так...");
          
        })
        .finally (() => showInputForm());
        
      
      }
    

    

    // работа счетчиков кликов
    const initLikesListeners = () => {
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

    
    // создаем или обновляем основной массив комментариев
    const renderComments = () => {
      list.innerHTML = comments.map((comment, index) => {
        return `
        <li class="comment" data-index="${index}">
          <div class="comment-header">
            <div>${comment.name}</div>
            <div>${comment.date.toLocaleDateString()} ${comment.date.toLocaleTimeString()}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${comment.text
                // !!!!!!!!! 
                // строка с цитатой не заменяет знаки - придумать как
                // .replaceAll("%BEGIN_QUOTE", "<div class='quote'>").replaceAll("END_QUOTE%", "</div>")
            }
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.likes}</span>лайка
              <button data-index="${index}" class="like-button ${
                comment.isLiked ? "-active-like" : ""
            }"></button>
              </div>
            </div>
          </li>
        `   
         
      }).join("");

        
      initLikesListeners ();
      console.log(comments);

      

      // блок для создания цитаты в комментариях
      for (const comment of document.querySelectorAll(".comment")) {
        comment.addEventListener("click", () => {
          const quoteText = comments[comment.dataset.index];
          text.value = `%BEGIN_QUOTE > ${quoteText.text}END_QUOTE% ${quoteText.name},`
        });
      }

    }
    
    // renderComments();
    
    
    // проверяем и подсвечиваем пустые поля, после добавляем в массив
    const addButton = document.querySelector(".add-form-button");

    addButton.addEventListener("click", () => {
      // наша проверка полей ввода
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
       
    });
    
    console.log("It works!");
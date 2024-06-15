

export function showInputForm () {
    document.querySelector(".loaderPost").classList.add("loader"); // спрятать текст
    document.querySelector(".add-form").classList.remove("invisible"); // показать форму
    console.log("нашлись");
  }

export function hideInputForm () {
      document.querySelector(".loaderPost").classList.remove("loader");
      document.querySelector(".add-form").classList.add("invisible");
      console.log("прячемся");
      }
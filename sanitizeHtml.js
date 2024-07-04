// защита строки от ввода тегов + оформление цитат




export function sanitizeHtml (stringHtml) {
  return stringHtml.replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "quot;")
    .replaceAll("%BEGIN_QUOTE", "<div class='quote'>")
    .replaceAll("END_QUOTE%", "</div>");
}


// Обошлись без нее пока
// export function sanitizeName ({userName}) {
  
//   return userName.replaceAll("&", "&amp;")
//     .replaceAll("<", "&lt;")
//     .replaceAll(">", "&gt;")
//     .replaceAll('"', "quot;")
//     .replaceAll("%BEGIN_QUOTE", "<div class='quote'>")
//     .replaceAll("END_QUOTE%", "</div>");
// }; 
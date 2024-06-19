// защита строки от ввода тегов + оформление цитат


export function sanitizeHtml (stringHtml) {
  return stringHtml.replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "quot;")
    .replaceAll("%BEGIN_QUOTE", "<div class='quote'>")
    .replaceAll("END_QUOTE%", "</div>");
}; 

// export function sanitizeName ({ userName }) {
//   return userName.value.replaceAll("&", "&amp;")
//     .replaceAll("<", "&lt;")
//     .replaceAll(">", "&gt;")
//     .replaceAll('"', "quot;")
//     .replaceAll("%BEGIN_QUOTE", "<div class='quote'>")
//     .replaceAll("END_QUOTE%", "</div>");
// }; 
// защита строки от ввода тегов + оформление цитат

export function sanitizeHtml (htmlString) {
  return htmlString.replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "quot;")
    .replaceAll("%BEGIN_QUOTE", "<div class='quote'>")
    .replaceAll("END_QUOTE%", "</div>");
}; 
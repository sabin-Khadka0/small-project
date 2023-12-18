const emoji = document.querySelector(".emoji");

const emojis = [
  "😂",
  "🤣",
  "❤️",
  "😁",
  "😊",
];



emoji.addEventListner("mouseover", () => {

  emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

});
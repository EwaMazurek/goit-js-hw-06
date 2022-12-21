function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const colorNumber = document.querySelector(".color");

button.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  colorNumber.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxOfBoxes = document.querySelector("#boxes");

let i = 0;

const createBoxes = amount => {
  for (i; i < amount; i++) {
    const newBox = document.createElement("div");

    let size = 30 + i * 10;
    Object.assign(newBox.style, {
      backgroundColor: getRandomHexColor(),
      height: `${size}px`,
      width: `${size}px`,
    });
    boxOfBoxes.append(newBox);
  }
};

createBtn.addEventListener("click", () => {
  createBoxes(input.value);
});

const destroyBoxes = () => {
  i = 0;
  input.value = 1;
  boxOfBoxes.innerHTML = "";
};

destroyBtn.addEventListener("click", destroyBoxes);

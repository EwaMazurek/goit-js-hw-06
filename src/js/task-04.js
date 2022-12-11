let counterValue = 0;
const value = document.querySelector("#value");

const increaseBtn = document.querySelector('button[data-action="increment"]');
const decreaseeBtn = document.querySelector('button[data-action="decrement"]');

increaseBtn.addEventListener("click", () => {
  counterValue = counterValue + 1;
  value.textContent = counterValue;
});

decreaseeBtn.addEventListener("click", () => {
  counterValue = counterValue - 1;
  value.textContent = counterValue;
});

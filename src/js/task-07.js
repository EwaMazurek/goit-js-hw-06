const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
slider.value = 0;
slider.addEventListener("input", event => {
  const fontSizeString = event.currentTarget.value + "px";
  text.style.fontSize = fontSizeString;
});

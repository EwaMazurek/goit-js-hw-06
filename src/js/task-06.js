const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  input.removeAttribute("class");
  console.log(input.dataset.length);

  if (input.value.length.toString() === input.dataset.length) input.classList.add("valid");
  else input.classList.add("invalid");
});

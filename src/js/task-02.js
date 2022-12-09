const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

//const listItem = document.createElement("li");

//listItem.textContent = ingredients[0];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach(el => {
  const item = document.createElement("li");
  item.textContent = el;
  ingredientsList.appendChild(item);
});

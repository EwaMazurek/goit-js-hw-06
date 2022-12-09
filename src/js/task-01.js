const categories = document.querySelectorAll("h2");
console.log(`Number of categories: ${categories.length}`);
const lists = document.querySelectorAll(".item");
const lists2 = Array.from(lists);

categories.forEach((el, i) => {
  console.log("Category: " + el.textContent);
  console.log("Elements: " + el.nextElementSibling.children.length);
});

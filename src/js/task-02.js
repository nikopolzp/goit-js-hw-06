const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Знаходимо список по id
const listEl = document.querySelector("#ingredients");
// Створюю масив в який буду пушити список li
const liArray = [];
// перебираємо за допомогою методу forEach
ingredients.forEach((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.className = "item";
  itemEl.textContent = ingredient;
  liArray.push(itemEl);
});

listEl.append(...liArray);

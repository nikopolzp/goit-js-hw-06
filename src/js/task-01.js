// Визначаємо кількість li з класом item
const numberOfCategories = document.querySelectorAll(".item");
console.log("Number of categories:", numberOfCategories.length);
// Визначаємо головного батька від якого починаємо шукати єлементи
const mainListEl = document.querySelector("#categories");
// Визначаємо перший заголовок на сторінці
const firstTitleItem = document.querySelector("h2");
console.log("Category:", firstTitleItem.textContent);
// Визначаємо першу дитину li з класом item
const firstItemList = document.querySelector(".item ul");
// Визначаємо довжину списка Animal
const animalItemLength = firstItemList.children;
console.log("Elements:", animalItemLength.length);
// Визначаємо другий список li з класом item
const secondItemList = mainListEl.children[1];
// Визначаємо другий заголовок на сторінці
const secondTitleEl = secondItemList.firstElementChild;
console.log("Category:", secondTitleEl.textContent);
// Визначаємо другу дитину другого списку
const productsListEl = secondItemList.children[1];
// Визначаємо довжину другого списку
const productsLengthEl = productsListEl.children;
console.log("Elements:", productsLengthEl.length);
// Визначаємо третій список li з класом item
const thirdItemList = mainListEl.children[2];
// Визначаємо третій заголовок на сторінці
const thirdTitleEl = thirdItemList.firstElementChild;
console.log("Category:", thirdTitleEl.textContent);
// Визначаємо другу дитину третього списку
const technologiesListEl = thirdItemList.children[1];
// Визначаємо довжину третього списку
const technologiesLengthEl = technologiesListEl.children;
console.log("Elements:", technologiesLengthEl.length);

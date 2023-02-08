const button = document.querySelector("button.change-color");
const span = document.querySelector("span.color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener("click", () => {
  const body = document.querySelector("body");
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.innerHTML = randomColor;
});

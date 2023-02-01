function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = document.querySelector("#boxes");
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(box);

    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  const boxes = document.querySelector("#boxes");
  boxes.innerHTML = "";
}

const controls = document.querySelector("#controls");
controls.addEventListener("click", (event) => {
  if (event.target.matches("[data-create]")) {
    const input = controls.querySelector("input");
    createBoxes(input.value);
  } else if (event.target.matches("[data-destroy]")) {
    destroyBoxes();
  }
});

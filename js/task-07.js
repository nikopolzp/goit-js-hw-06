const inputChange = document.querySelector("input#font-size-control");
const spanTextEl = document.querySelector("span#text");

inputChange.addEventListener("change", (e) => {
  spanTextEl.style.fontSize = `${e.target.value}px`;
});

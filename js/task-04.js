let counterValue = 0;

const refs = {
  minusBtn: document.querySelector('button[data-action="decrement"]'),
  plusBtn: document.querySelector('button[data-action="increment"]'),
  spanValue: document.querySelector("#value"),
};

refs.plusBtn.addEventListener("click", () => {
  counterValue += 1;
  refs.spanValue.textContent = counterValue;
});

refs.minusBtn.addEventListener("click", () => {
  counterValue -= 1;
  refs.spanValue.textContent = counterValue;
});

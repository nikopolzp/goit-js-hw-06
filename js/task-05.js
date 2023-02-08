document.querySelector("#name-input").addEventListener("input", () => {
  let data = document.querySelector("#name-input").value;
  document.querySelector("#name-output").textContent = data;
});

const validateInputRef = document.querySelector("#validation-input");
validateInputRef.addEventListener("blur", (e) => {
  if (e.target.value.length == validateInputRef.getAttribute("data-length")) {
    validateInputRef.classList.add("valid");
    if (validateInputRef.classList.contains("invalid")) {
      validateInputRef.classList.remove("invalid");
    }
  } else {
    if (validateInputRef.classList.contains("valid")) {
      validateInputRef.classList.remove("valid");
    }
    validateInputRef.classList.add("invalid");
  }
});

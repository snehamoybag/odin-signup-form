const inputEls = document.querySelectorAll(".form__input");
const passwordEl = document.querySelector("password");
const confirmPasswordsEl = document.querySelector("#confirm-password");

inputEls.forEach((inputEl) =>
  inputEl.addEventListener("invalid", () => {
    inputEl.classList.add("error");
  })
);

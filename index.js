const inputEls = document.querySelectorAll(".form__input");
const passwordEl = document.querySelector("#password");
const confirmPasswordEl = document.querySelector("#confirm-password");
const passErrorMsgEl = document.querySelector("#error-pass-msg");

// manually add and remove invalid error styling
const throwPassMismatchError = function () {
  passwordEl.classList.add("error");
  confirmPasswordEl.classList.add("error");
  passErrorMsgEl.classList.remove("hidden");
  confirmPasswordEl.focus(); //switch focus
};
const removePassMismatchError = function () {
  confirmPasswordEl.classList.remove("error");
  passwordEl.classList.remove("error");
  passErrorMsgEl.classList.add("hidden");
};

// add invalid error on all input field
// checks HTML pattern for validity
inputEls.forEach((inputEl) => {
  inputEl.addEventListener("invalid", () => inputEl.classList.add("error"));
});

// check for password mismatch while typying in confirm field
confirmPasswordEl.addEventListener("input", () => {
  passwordEl.value !== confirmPasswordEl.value
    ? throwPassMismatchError()
    : removePassMismatchError();
});

// check for password match on form submit
const formEl = document.querySelector("#form");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  if (passwordEl.value !== confirmPasswordEl.value) {
    throwPassMismatchError();
  } else {
    removePassMismatchError();
    alert("Sign up successful! Thanks for checking out this project! :)");
  }
});

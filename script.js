const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const submitBtn = document.querySelector("#submit-btn");
const passwordInput = document.querySelector("#password-input");
const emailInput = document.querySelector("#email-input");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};
submitBtn.onkeyup = () => {
  submitBtn.classList.remove("is-valid");
  submitBtn.classList.remove("is-invalid");
};
passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};
emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};
submitBtn.onclick = () => {
  isFirstNameOK = false;
  isLastNameOK = false;
  isEmailOK = false;
  isPasswordOK = false;
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOK = true;
  }
  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOK = true;
  }
  if (validateEmail(emailInput.value) === true) {
    emailInput.classList.add("is-valid");
    isEmailOK = true;
  } else {
    emailInput.classList.add("is-invalid");
  }
  if (passwordInput.value.length >= 6) {
    passwordInput.classList.add("is-valid");
    isPasswordOK = true;
  } else {
    passwordInput.classList.add("is-invalid");
  }
  if (isFirstNameOK && isLastNameOK && isEmailOK && isPasswordOK === true) {
    alert("Registered successfully");
  }
};

const form = document.querySelector(".form");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const message = document.querySelector(".message");
const checkbox = document.querySelector(".checkbox");
const terms = document.querySelector(".term-link");

function showError(input, message){
  const formControl = input.parentElement;
  formControl.className = "input-fields error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function clearError(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  const small = formControl.querySelector("small");
  small.innerText = "";
}

function checkName() {
  const nameValue = name.value.trim();
  if (nameValue === "") {
    showError(name, "Enter a valid name!");
    return false;
  }
  clearError(name);
  return true;
}

function checkEmail() {
  const emailValue = email.value.trim();
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(emailValue)) {
    showError(email, "Enter a valid email!");
    return false;
  }
  clearError(email);
  return true;
}

function checkMessage() {
  const messageValue = message.value.trim();
  if (messageValue === "") {
    showError(message, "Enter a small message!");
    return false;
  }
  clearError(message);
  return true;
}

function checkTerms() {
  if (!checkbox.checked) {
    terms.classList.add("error");
    return false;
  }
  terms.classList.remove("error");
  return true;
}

function checkAll(e){
    e.preventDefault();
  
    let isValid = true;
  
    if (!checkName()) isValid = false;
    if (!checkEmail()) isValid = false;
    if (!checkMessage()) isValid = false;
    if (!checkTerms()) isValid = false;

    if (isValid) {
      form.submit();
    }
}

form.addEventListener("submit", checkAll);

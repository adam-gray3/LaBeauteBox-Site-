const form = document.querySelector(".form");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const message = document.querySelector(".message");

form.addEventListener("submit", checkAll);

//ERROR FUNCTION
function showError(input, message){
  const formControl = input.parentElement;
  formControl.className = "input-fields error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

const errors = [];

//CHECKNAME FUNCTION
function checkName(input){
  if(input === ""){
    showError(name, "Enter a valid name!");
    errors.push(name)
  }
};

function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(input)){
      showError(email, "Enter a valid email!");
      errors.push(email)
    }
};

function checkMessage(input){
  if(input === ""){
    showError(message, "Enter a small message!");
    errors.push(message)
  }
}

function checkAll(e){
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value;
  checkName(nameValue)
  checkEmail(emailValue)
  checkMessage(messageValue)
  if(errors.length > 0){
    e.preventDefault();
  }
}

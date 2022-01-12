const form = document.querySelector(".form");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const message = document.querySelector(".message");

form.addEventListener("submit", checkAll);

let pass = true;
//functions
//ERROR FUNCTION
function showError(input, message){
  const formControl = input.parentElement;
  formControl.className = "input-fields error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//CHECKNAME FUNCTION
function checkName(input){
  if(input === ""){
    showError(name, "Enter a valid name!");
    return false;
  } else{return}
};

function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(input)){
      showError(email, "Enter a valid email!");
      return false;
    } else{
    return;
    }
};

function checkMessage(input){
  if(input === ""){
    showError(message, "Enter a small message!");
    return false;
  } else{
    valid()
  }
}

function checkAll(e){
  e.preventDefault();
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value;
  checkName(nameValue)
  checkEmail(emailValue)
  checkMessage(messageValue)
}

function valid(){
  console.log("valid")
}

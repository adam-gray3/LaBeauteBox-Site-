const form = document.querySelector(".form");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const message = document.querySelector(".message");


form.addEventListener("submit", checkAll);

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
  } else{form.submit();}

};

function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(input)){
      showError(email, "Enter a valid email!");
    }else{form.submit();}



};


function checkAll(e){
  e.preventDefault();
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  checkName(nameValue)
  checkEmail(emailValue)

}

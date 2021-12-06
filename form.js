const name = document.querySelector(".name");
const email = document.querySelector(".email");
const btn = document.querySelector(".btn");



function checkAll(){
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();

  if(nameValue === ""){
    showError(name, "Name cannot be empty");
  }

  if(emailValue === ""){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test()){
      console.log(emailValue)
    } else{
      showError(email, "Enter a valid Email!")
    }

  }
}


function showError(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;

  formControl.className("input-fields error")
}


btn.addEventListener("click", checkAll);

/*function checkEmail(input, message){
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value.trim())){
    console.log(email.value)
  } else{
    showError(input, "Enter Valid Email")
  }
};
*/

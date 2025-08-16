//Footer newsletter signup form
const offerForm = document.querySelector('.offers-form');
const offerEmail = document.querySelector('.offers-email');
const offerName = document.querySelector('.offers-name');
const offersCheckbox = document.querySelector('.offers-checkbox');

function checkNewsletterSignUp(e){
  e.preventDefault();
  let isValid = false; 

  //check email
  if(offerEmail.value){
      const emailValue = offerEmail.value.trim();
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!re.test(emailValue)) {
        isValid = false;
      }

      isValid = true;
  }  

  //check name
  if(offerName.value === ''){
      isValid = false;
  }

  //check terms
  if(!offersCheckbox.checked){
    isValid = false;
  }

  if(isValid){
    offerForm.submit(); 
    offerEmail.value = '';
    offerName.value = '';
    offersCheckbox = false; 
  }

}

offerForm.addEventListener('submit', checkNewsletterSignUp)
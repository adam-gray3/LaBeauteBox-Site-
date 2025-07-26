
//Modal Function

const modal = document.querySelector(".modal-container");
const modalBtn = document.querySelector(".term-link");
const closeBtn = document.querySelector(".close-modal");

modalBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);

function showModal(){
  modal.classList.add("toggle-modal")
};

function closeModal(){
  modal.classList.remove("toggle-modal")
};

window.addEventListener("click", function(e){
  if(e.target == modal){
    closeModal();
  }
})
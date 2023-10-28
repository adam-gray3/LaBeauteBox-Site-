//SETUP ARRAY OF OBJECTS FOR TESTIMONALS TO ADD DYNAMICALLY.
let items = [{
  id: 1,
  text: "I suffer really badly with dry and cracked skin on my feet and Emma makes them feel and look beautiful! My nails always last and look so glossy! I cant recommend her enough, she makes me feel comfortable and relaxed.",
  image: "../images/testimonal-cream.png"
},
{
  id: 2,
  text: "I've always loved Emma doing my nails as she is really gentle compared to other places I've been. She also uses really good products that last a long time and has an abundnace of colours to choose. Emma is really easy to get along with, I wouldnt use anybody else.",
  image: "../images/testimonal-nails.png"
},
{
  id: 3,
  text: "Excellent service always with a smile! Enjoy my manicures everytime.",
  image: "../images/testimonal-hands.png"
},
{
  id: 4,
  text: "Since having my nails done by Emma and following her aftercare advice my nails last 3 weeks, the longest lasting manicure I’ve had. I’ve seen such an improvement in the condition of my nails and cuticles.",
  image: "../images/testimonal-pedicure.png"
}
];

//SETUP VARIABLES FOR ALL DOM ITEMS AND START POINT FOR slideshow
let currentSlide = 0;

const name = document.querySelector(".name");
const testimonal = document.querySelector(".testimonal");
const icon = document.querySelector(".icon");

const nxtBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

//SETUP FUNCTION TO SHOW SLIDE
function showSlide(){
  /*const slides = items[currentSlide];*/
  testimonal.textContent = items[currentSlide].text;
  icon.src = items[currentSlide].image;
}

//SETUP EVENT LISTENERS FOR BUTTONS
nxtBtn.addEventListener("click", nxtSlide)
prevBtn.addEventListener("click", prevSlide)

function nxtSlide(){
  currentSlide++;
  if(currentSlide > 3){
    currentSlide = 0;
  }
  showSlide();
};

function prevSlide(){
  currentSlide--;
  if(currentSlide < 0){
    currentSlide = items.length -1
  };
  showSlide();
};

setInterval(nxtSlide, 9000);

//HOMEPAGE IMAGE FLIP
let images = document.querySelectorAll(".flip-card");
images.forEach(flipImage);
function flipImage(image){
  image.addEventListener("click", function(){
    image.classList.toggle("flip");
  })
}

//MOBILE ROTATE
const mediaQuery = window.matchMedia("(max-width: 767px)");

function screenChange(e){
  if(e.matches){
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("rotate", entry.isIntersecting)
        if(entry.isIntersecting) observer.unobserve(entry.target)
      })
    }, {
      threshold: 0.7,
    })

    images.forEach(image => {
      observer.observe(image)
    })
  }
}

mediaQuery.addListener(screenChange);
screenChange(mediaQuery)


//Modal Function

const modal = document.querySelector(".modal-container");
const modalBtn = document.querySelector(".safety");
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


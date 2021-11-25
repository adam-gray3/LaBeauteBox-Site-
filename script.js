//SETUP ARRAY OF OBJECTS FOR TESTIMONALS TO ADD DYNAMICALLY.
let items = [{
  id: 1,
  name: "Client 1",
  text: "I suffer really badly with dry and cracked skin on my feet and Emma makes them feel and look beautiful! My nails always last and look so glossy! I cant recommend her enough, she makes me feel comfortable and relaxed.",
  image: "../images/white-towel.png"
},
{
  id: 2,
  name: "One of our lovely clients!",
  text: "I've always loved Emma doing my nails as she is really gentle compared to other places i've been. She also uses really good products that last a long time and has an abundnace of colours to choose. Emma is really easy to get along with, I wouldnt use anybody else.",
  image: "../images/white-hand.png"
},
{
  id: 3,
  name: "Client 3",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ea nobis placeat, vitae ullam necessitatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ea nobis placeat, vitae ullam necessitatibus",
  image: "../images/white-spa.png"
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
  name.textContent = items[currentSlide].name;
  testimonal.textContent = items[currentSlide].text;
  icon.src = items[currentSlide].image;
}

//SETUP EVENT LISTENERS FOR BUTTONS
nxtBtn.addEventListener("click", nxtSlide)
prevBtn.addEventListener("click", prevSlide)

function nxtSlide(){
  currentSlide++;
  if(currentSlide > 2){
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

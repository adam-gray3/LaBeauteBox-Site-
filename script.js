//SETUP ARRAY OF OBJECTS FOR TESTIMONALS TO ADD DYNAMICALLY.
const items = [{
  id: 1,
  name: "Client 1",
  text: "I suffer really badly with dry and cracked skin on my feet and Emma makes them feel and look beautiful! My nails always last and look so glossy! I cant recommend her enough, she makes me feel comfortable and relaxed.",
},
{
  id: 2,
  name: "One of our lovely clients!",
  text: "I've always loved Emma doing my nails as she is really gentle compared to other places i've been. She also uses really good products that last a long time and has an abundnace of colours to choose. Emma is really easy to get along with, I wouldnt use anybody else."
},
{
  id: 3,
  name: "Client 3",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ea nobis placeat, vitae ullam necessitatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ea nobis placeat, vitae ullam necessitatibus"
}
];

//SETUP VARIABLES FOR ALL DOM ITEMS AND START POINT FOR slideshow
let currentSlide = 0;

const name = document.querySelector(".name");
const testimonal = document.querySelector(".testimonal");

const nxtBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

//SETUP FUNCTION TO SHOW SLIDE
function showSlide(){
  const slides = items[currentSlide];
  name.textContent = items[currentSlide].name;
  testimonal.textContent = items[currentSlide].text;
}

//SETUP EVENT LISTENERS FOR BUTTONS
nxtBtn.addEventListener("click", nxtSlide)



function nxtSlide(){
  currentSlide++;
  if(currentSlide > 2){
    currentSlide = 0;
  }
  showSlide();
};

prevBtn.addEventListener("click", function(){
  currentSlide--;
  if(currentSlide < 0){
    currentSlide = items.length -1
  };
  showSlide();
})



setInterval(nxtSlide, 4000);

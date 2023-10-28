const heroImg = document.querySelector(".gallery-hero");
const images = Array.from(document.querySelectorAll(".thumbnails img"));
heroImg.src = images[0].src;
let count = 0;

const change = (e) => {
    heroImg.src = e.target.src;
    e.target.classList.add("active")
};

//Change opacity of thumbnail
const currentImageThumbnail = () => {
    images.forEach(img => {
        img.src === heroImg.src ? img.classList.add("active") : img.classList.remove("active");
     })
}

//Change image on click
images.forEach(img => {
    img.addEventListener("click", (e) => {
        change(e);
        currentImageThumbnail();
    })
});

//Loops through images and changes hero source to current image
const autoChange = () => {
   //Increment counter and loop backround at end  
   count === images.length - 1 ? count = 0 : count++;

   //Set hero image to current image
   heroImg.src = images[count].src;  

   //Change opacity of current image
   currentImageThumbnail();
};


const interval = setInterval(autoChange, 5000);
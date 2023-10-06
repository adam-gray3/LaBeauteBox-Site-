const gallery = document.querySelector(".active-image");
const thumbnails = document.querySelectorAll(".thumbnail");
const thumbnailArray = Array.from(thumbnails);
let activeImg;
let timer;
let timeInterval = 3000;


autoRotateImage()

//AUTO ROTATE IMAGE
function autoRotateImage(){
    timer = setInterval(() => {
        activeImg = document.querySelector(".thumbnail.active");
        if(activeImg === thumbnailArray[thumbnailArray.length - 1]){
            const newImg = thumbnailArray[0];
            updateActiveImage(newImg)
        } else{
            const newImg = activeImg.nextElementSibling;
            updateActiveImage(newImg)
        }

    }, timeInterval)
};


//Update active image

function updateActiveImage(image) {
    thumbnails.forEach((thumbnail) => {
        thumbnail.classList.remove("active")
    });

    image.classList.add("active");
    gallery.src = image.querySelector("img").src;
}


//EVENT LISTENER 
thumbnails.forEach((img) => {
    img.addEventListener("click", () => {
        updateActiveImage(img)
        clearInterval(timer)
        autoRotateImage()
    })
}); 


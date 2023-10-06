const menuBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const close = document.querySelector(".close");
const body = document.querySelector("body");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("open");
  menuBtn.style.display = "none";
  body.style.overflow = "hidden";
});


close.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  menuBtn.style.display = "block";
});

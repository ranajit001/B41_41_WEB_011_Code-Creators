const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

let currentIndex = 0;

function showSlide(index) {
  const totalSlides = slides.length;
  currentIndex = (index + totalSlides) % totalSlides; 
  const offset = -currentIndex * 100; 
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

leftArrow.addEventListener("click", () => showSlide(currentIndex - 1));
rightArrow.addEventListener("click", () => showSlide(currentIndex + 1));
showSlide(currentIndex);

// ******************************************************************************
let products = document.querySelectorAll(".slidingp3");
let prevButtons = document.querySelectorAll(".part3row1 .prev");
let nextButtons = document.querySelectorAll(".part3row1 .next");

let scrollStep = 700;
let scrollSpeed = 300;

prevButtons.forEach((prev, index) => {
    prev.addEventListener("click", () => {
        products[index].scrollBy({
            left: -scrollStep,
            behavior: "smooth"
        });
    });
});

nextButtons.forEach((next, index) => {
    next.addEventListener("click", () => {
        products[index].scrollBy({
            left: scrollStep,
            behavior: "smooth"
        });
    });
});


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

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

window.onload = function() {
    // Check if user data exists in localStorage
    const userData = JSON.parse(localStorage.getItem("user"));
  
    if (userData) {
      // If user is logged in, set the username and redirect profile link
      document.getElementById("username").textContent = userData.name; // Display user's name
      document.getElementById("profile-link").href = "profile.html"; // Redirect to profile
    } else {
      // If not logged in, redirect to login page when clicking on profile
      document.getElementById("profile-link").href = "signin.html"; // Redirect to signin page
    }
  };
  document.getElementById("admin-link").addEventListener("click", function(event) {
    const existingAdmin = localStorage.getItem("admin");

    // If the admin doesn't exist or the credentials are not found, redirect to sign in page
    if (!existingAdmin) {
        alert("You need to log in first!");
        window.location.href = "signInAdmin.html"; // Redirect to login page
    } else {
        window.location.href = "Admin.html"; // Redirect to Admin Dashboard if logged in
    }
});
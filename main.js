document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileMenuButton && navMenu) {
    mobileMenuButton.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !navMenu.contains(event.target) &&
        event.target !== mobileMenuButton
      ) {
        navMenu.classList.remove("active");
      }
    });
  }

  // Slideshow functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  if (slides.length > 0) {
    function showSlides() {
      // Hide all slides
      slides.forEach((slide) => {
        slide.classList.remove("fade");
      });

      // Show current slide
      slides[currentSlide].classList.add("fade");

      // Move to the next slide
      currentSlide = (currentSlide + 1) % slides.length;

      // Change slide every 5 seconds
      setTimeout(showSlides, 5000);
    }

    // Initialize first slide

    slides[0].classList.add("fade");
    // Start the slideshow
    setTimeout(showSlides, 5000);
  }
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  // Hide all slides
  slides.forEach((slide) => {
    slide.classList.remove("fade");
  });

  // Show current slide
  slides[currentSlide].classList.add("fade");

  // Move to the next slide
  currentSlide = (currentSlide + 1) % slides.length;

  // Change slide every 5 seconds
  setTimeout(showSlides, 5000);
}

// Start the slideshow
showSlides();

//============================================

// const btn = document.getElementById("products-button");
// const menu = document.getElementById("products-menu");

// btn.addEventListener("click", (event) => {
//   event.stopPropagation();
//   const isExpanded = btn.getAttribute("aria-expanded") === "true";
//   btn.setAttribute("aria-expanded", String(!isExpanded));
//   menu.classList.toggle("hidden");
//   btn.querySelector("svg").classList.toggle("-rotate-180");
// });

// document.addEventListener("click", (event) => {
//   if (!menu.contains(event.target) && !btn.contains(event.target)) {
//     btn.setAttribute("aria-expanded", "false");
//     menu.classList.add("hidden");
//     btn.querySelector("svg").classList.remove("-rotate-180");
//   }
// });

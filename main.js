document.addEventListener("DOMContentLoaded", function () {
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
});

//=======================================================
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  // Hide all slides
  slides.forEach((slide) => {
    slide.classList.remove("fade");
  });

  // Show current slide
  slides[currentSlide].classList.add("fade");

  // Move to next slide
  currentSlide = (currentSlide + 1) % slides.length;

  // Change slide every 5 seconds
  setTimeout(showSlides, 5000);
}

// Start the slideshow
showSlides();

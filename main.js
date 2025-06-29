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

// Load navbar
fetch("navbar.html")
  .then((res) => res.text())
  .then((html) => (document.getElementById("navbar").innerHTML = html));

// // Load footer
fetch("footer.html")
  .then((res) => res.text())
  .then((html) => (document.getElementById("footer").innerHTML = html));

// ==============================================

// Fixed dropdown functionality - Add this to your JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const servicesToggle = document.getElementById("servicesToggle");
  const servicesDropdown = document.getElementById("servicesDropdown");
  const arrow = servicesToggle ? servicesToggle.querySelector(".arrow") : null;

  if (servicesToggle && servicesDropdown && arrow) {
    // Handle click on Services link
    servicesToggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = servicesDropdown.classList.contains("show");

      if (isOpen) {
        // Close dropdown
        servicesDropdown.classList.remove("show");
        arrow.style.transform = "rotate(0deg)";
      } else {
        // Open dropdown
        servicesDropdown.classList.add("show");
        arrow.style.transform = "rotate(180deg)";
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (
        !servicesToggle.contains(e.target) &&
        !servicesDropdown.contains(e.target)
      ) {
        servicesDropdown.classList.remove("show");
        arrow.style.transform = "rotate(0deg)";
      }
    });

    // Close dropdown when clicking on a dropdown item
    const dropdownItems = servicesDropdown.querySelectorAll(".dropdown-item");
    dropdownItems.forEach((item) => {
      item.addEventListener("click", function () {
        servicesDropdown.classList.remove("show");
        arrow.style.transform = "rotate(0deg)";
      });
    });
  }
});
// =======================================================

// // Function to navigate to contact page with optional service parameter
// function goToContact(source = "") {
//   // If we're already on the contact page, just scroll to top
//   if (window.location.pathname.includes("Contact Us")) {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     return;
//   }

//   // Navigate to contact page
//   let contactUrl = "Contact Us";

//   // Add source parameter to track where the user came from
//   if (source) {
//     contactUrl += `?source=${source}`;
//   }

//   window.location.href = contactUrl;
// }

// // Function to handle newsletter form submission
// function handleFormSubmit(event) {
//   event.preventDefault();

//   const email = event.target.querySelector('input[type="email"]').value;

//   // You can either:
//   // 1. Process the newsletter signup here
//   // 2. Redirect to contact page with email pre-filled

//   // Option 2: Redirect to contact with email
//   window.location.href = `contact.html?email=${encodeURIComponent(
//     email
//   )}&source=newsletter`;
// }

// // Function to handle contact form submission
// function handleContactSubmit(event) {
//   event.preventDefault();

//   // Get form data
//   const formData = new FormData(event.target);
//   const data = Object.fromEntries(formData);

//   // Here you would typically send the data to your server
//   console.log("Contact form submitted:", data);

//   // Show success message
//   alert("Thank you for your message! We'll get back to you soon.");

//   // Reset form
//   event.target.reset();
// }

// // Function to pre-fill contact form based on URL parameters
// function prefillContactForm() {
//   const urlParams = new URLSearchParams(window.location.search);
//   const source = urlParams.get("source");
//   const email = urlParams.get("email");

//   // Pre-fill email if provided
//   if (email) {
//     const emailInput = document.getElementById("email");
//     if (emailInput) {
//       emailInput.value = decodeURIComponent(email);
//     }
//   }

//   // Pre-select service based on source
//   if (source) {
//     const serviceSelect = document.getElementById("service");
//     if (serviceSelect) {
//       // Map sources to service options
//       const sourceToService = {
//         service1: "service1",
//         service2: "service2",
//         service3: "service3",
//         quote: "quote",
//         cta: "general",
//         newsletter: "general",
//         footer: "general",
//       };

//       const serviceValue = sourceToService[source];
//       if (serviceValue) {
//         serviceSelect.value = serviceValue;
//       }
//     }

//     // Add a note about where they came from
//     const messageTextarea = document.getElementById("message");
//     if (messageTextarea && messageTextarea.value === "") {
//       const sourceMessages = {
//         service1: "I'm interested in Service 1.",
//         service2: "I'm interested in Service 2.",
//         service3: "I'm interested in Service 3.",
//         quote: "I'd like to get a quote for my project.",
//         cta: "I'm ready to get started with your services.",
//         newsletter:
//           "I was about to subscribe to your newsletter but decided to contact you directly.",
//         footer: "I found your contact information in the footer.",
//       };

//       if (sourceMessages[source]) {
//         messageTextarea.value = sourceMessages[source];
//       }
//     }
//   }
// }

// // Run prefill function when contact page loads
// document.addEventListener("DOMContentLoaded", () => {
//   if (window.location.pathname.includes("contact.html")) {
//     prefillContactForm();
//   }
// });

// // Smooth scrolling for anchor links
// document.addEventListener("DOMContentLoaded", () => {
//   const links = document.querySelectorAll('a[href^="#"]');

//   links.forEach((link) => {
//     link.addEventListener("click", function (e) {
//       e.preventDefault();

//       const targetId = this.getAttribute("href").substring(1);
//       const targetElement = document.getElementById(targetId);

//       if (targetElement) {
//         targetElement.scrollIntoView({
//           behavior: "smooth",
//         });
//       }
//     });
//   });
// });

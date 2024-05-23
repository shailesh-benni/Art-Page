// Define scroll reveal options
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: "1000",
};

// Apply scroll reveal effect to elements with specified classes
ScrollReveal().reveal(".section__container h3", { ...scrollRevealOption });
ScrollReveal().reveal(".section__container h1", { ...scrollRevealOption, origin: "left", delay: 500 });
ScrollReveal().reveal(".section__container h2", { ...scrollRevealOption, origin: "right", delay: 800 });
ScrollReveal().reveal(".section__container button", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".nav__links li", { ...scrollRevealOption, origin: "top", interval: 300, delay: 1500 });
ScrollReveal().reveal(".socials a", { ...scrollRevealOption, duration: 1000, interval: 500, delay: 500 });
ScrollReveal().reveal(".contact", { ...scrollRevealOption, duration: 1000, interval: 500, delay: 500 });
ScrollReveal().reveal(".contact a", { ...scrollRevealOption, interval: 500, delay: 500 });
ScrollReveal().reveal(".photo", { ...scrollRevealOption, origin: "top", delay: 600 });
ScrollReveal().reveal(".about h4", { ...scrollRevealOption, origin: "bottom", delay: 100 });
ScrollReveal().reveal(".about h1", { ...scrollRevealOption, origin: "bottom", delay: 300 });
ScrollReveal().reveal(".about img", { ...scrollRevealOption, origin: "bottom", delay: 500 });
ScrollReveal().reveal(".about .para", { ...scrollRevealOption, origin: "bottom", delay: 700 });
ScrollReveal().reveal(".sketches", { ...scrollRevealOption, origin: "bottom", delay: 200 });
ScrollReveal().reveal(".container", { ...scrollRevealOption, origin: "bottom", delay: 700 });

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling effect for anchor links
    document.querySelectorAll('a[href^="#about"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                console.log('Target:', target); // Add this line for debugging
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    document.querySelectorAll('a[href^="#contact"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                console.log('Target:', target); // Add this line for debugging
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    document.querySelectorAll('a[href^="#sketches"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                console.log('Target:', target); // Add this line for debugging
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var element = document.querySelector('.bp-powered-by');
    if (element) {
      element.parentNode.removeChild(element);
    }
  });
  
  

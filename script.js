// Back-to-top Button Visibility
const backToTopButton = document.querySelector('.back-to-top');

// Show the back-to-top button when the user scrolls down
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonialIndex = 0;

// Function to show testimonial based on the index
function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        if (i === index) {
            testimonial.classList.add('active');
        } else {
            testimonial.classList.remove('active');
        }
    });
}

// Show the first testimonial initially
showTestimonial(currentTestimonialIndex);

// Select the slider controls
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Handle next button click
nextButton.addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
});

// Handle previous button click
prevButton.addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
});

// Contact Form Submission Handling
const contactForm = document.getElementById('contactForm');
const formResponse = document.querySelector('.form-response');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Simulate form submission (you can replace this with actual server-side logic)
    setTimeout(() => {
        formResponse.textContent = 'Thank you for your message! We will get back to you soon.';
        formResponse.style.color = 'green';
    }, 1000);

    // Clear the form after submission
    contactForm.reset();
});

// Quote Form Submission Handling
const quoteForm = document.querySelector('.quote-form');
const quoteResponse = document.querySelector('.form-message');

quoteForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Simulate form submission (you can replace this with actual server-side logic)
    setTimeout(() => {
        quoteResponse.textContent = 'Quote request received. Our team will contact you soon.';
        quoteResponse.style.color = 'green';
    }, 1000);

    // Clear the form after submission
    quoteForm.reset();
});

// Smooth Scroll for Anchor Links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Number Animation for "Out Impact" Section (Counter Animation)
const counterSections = document.querySelectorAll('.counter');
let hasAnimated = false;

// Function to animate the numbers
function animateCounter() {
    counterSections.forEach(counter => {
        const targetValue = parseInt(counter.getAttribute('data-target'));
        const speed = 2000; // Animation speed in milliseconds
        const interval = 50; // Interval in milliseconds for each update
        let currentValue = 0;
        const increment = targetValue / (speed / interval);

        function updateCounter() {
            currentValue += increment;
            if (currentValue >= targetValue) {
                currentValue = targetValue;
            }
            counter.textContent = Math.floor(currentValue);
            if (currentValue < targetValue) {
                requestAnimationFrame(updateCounter);
            }
        }

        updateCounter();
    });
}

// Check if section is in viewport and trigger animation
function checkIfInView() {
    counterSections.forEach(counter => {
        const rect = counter.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0 && !hasAnimated) {
            animateCounter();
            hasAnimated = true;
        }
    });
}

// Run the check on scroll
window.addEventListener('scroll', function () {
    const backToTopButton = document.querySelector('.back-to-top');
  
    if (window.scrollY > 300) { // Adjust this value to control when the button appears
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });
  

// Initial check if elements are in view
checkIfInView();

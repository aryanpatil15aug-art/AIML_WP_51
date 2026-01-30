// Typing effect for home title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Smooth scroll to contact
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Fade-in animation on scroll with stagger
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

let staggerDelay = 0;
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, staggerDelay);
      staggerDelay += 200; // Stagger by 200ms
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Particle animation
function animateParticles() {
  const particles = document.querySelectorAll('.particle');
  particles.forEach((particle, index) => {
    const randomX = Math.random() * 100 - 50; // Random movement
    const randomY = Math.random() * 100 - 50;
    particle.style.transform = `translate(${randomX}px, ${randomY}px)`;
    setTimeout(() => {
      particle.style.transform = 'translate(0, 0)';
    }, 3000 + index * 500);
  });
}

setInterval(animateParticles, 5000); // Animate every 5 seconds

// Parallax effect on home section
window.addEventListener('scroll', () => {
  const homeBg = document.querySelector('.home-bg');
  const scrollY = window.scrollY;
  homeBg.style.transform = `translateY(${scrollY * 0.5}px)`;
});

// Contact form validation and submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Simulate form submission (replace with actual backend call)
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});

// main.js

// FAQ Dropdown Toggle
const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const content = toggle.nextElementSibling;
    const isOpen = content.classList.contains('open');

    if (isOpen) {
      content.classList.remove('open');
      content.style.maxHeight = null;
    } else {
      content.classList.add('open');
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Navbar toggle (for mobile, if needed in the future)
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

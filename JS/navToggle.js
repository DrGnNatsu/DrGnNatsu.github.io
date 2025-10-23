const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinksMobile = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinksMobile.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
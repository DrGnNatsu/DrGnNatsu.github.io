// ============================================
// THEME TOGGLE
// ============================================

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark-mode';
html.classList.add(currentTheme);
updateThemeIcon();

themeToggle.addEventListener('click', () => {
    if (html.classList.contains('dark-mode')) {
        html.classList.remove('dark-mode');
        html.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        html.classList.remove('light-mode');
        html.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('#themeIcon');
    if (html.classList.contains('dark-mode')) {
        icon.textContent = '☀️';
    } else {
        icon.textContent = '🌙';
    }
}

// ============================================
// MOBILE NAVIGATION
// ============================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
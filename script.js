// Navigation functionality
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

function showPage(targetPage) {
    // Remove active class from all nav links
    navLinks.forEach(nav => nav.classList.remove('active'));
    
    // Add active class to clicked nav link
    document.querySelector(`[data-page="${targetPage}"]`).classList.add('active');
    
    // Hide all pages
    pages.forEach(page => page.classList.remove('active'));
    
    // Show target page
    const pageElement = document.getElementById(targetPage);
    if (pageElement) {
        pageElement.classList.add('active');
    }
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('data-page');
        showPage(targetPage);
    });
});

// Login form functionality
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (email && password) {
            alert('Login functionality would be implemented here!\n\nEmail: ' + email);
            // Clear form
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
        } else {
            alert('Please fill in both email and password fields.');
        }
    });
}

// Add some interactivity to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add smooth scroll behavior for better UX
document.documentElement.style.scrollBehavior = 'smooth';

// Handle window resize for better mobile experience
window.addEventListener('resize', function() {
    // Recalculate layout if needed
    const currentActive = document.querySelector('.nav-link.active');
    if (currentActive) {
        const targetPage = currentActive.getAttribute('data-page');
        showPage(targetPage);
    }
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
});
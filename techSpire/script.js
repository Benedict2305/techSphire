document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check local storage for saved theme
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // --- Mobile Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // --- Button Interaction ---
    const ctaBtn = document.getElementById('cta-btn');
    
    ctaBtn.addEventListener('click', () => {
        // change text to "Welcome aboard!" for 2 seconds then revert
        const originalText = ctaBtn.textContent;
        ctaBtn.textContent = "Welcome aboard!";
        ctaBtn.style.background = "linear-gradient(135deg, #10b981, #059669)"; // Green success
        
        // Simulating an action
        setTimeout(() => {
            ctaBtn.textContent = originalText;
            ctaBtn.style.background = ""; // revert to CSS gradient
        }, 2000);
    });
});

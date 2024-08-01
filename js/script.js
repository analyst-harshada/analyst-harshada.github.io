// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
document.getElementById('dark-mode-toggle')?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Dynamic Content Update
const updateContent = () => {
    const currentDate = new Date();
    const dateDisplay = document.getElementById('date-display');
    if (dateDisplay) {
        dateDisplay.innerText = `Current Date: ${currentDate.toDateString()}`;
    }
};

// Call updateContent on page load
window.onload = () => {
    updateContent();
};

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('animated');
        } else {
            element.classList.remove('animated');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

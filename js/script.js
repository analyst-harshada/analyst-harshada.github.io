// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example function to toggle dark mode
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Example function to dynamically update content
const updateContent = () => {
    const currentDate = new Date();
    document.getElementById('date-display').innerText = `Current Date: ${currentDate.toDateString()}`;
};

// Call updateContent on page load
window.onload = () => {
    updateContent();
};

// Example animation on scroll
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

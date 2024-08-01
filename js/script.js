// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for form validation feedback
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const feedbackDiv = document.getElementById('form-feedback');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                feedbackDiv.innerHTML = `<p class="text-success">Thank you for your message, ${name}!</p>`;
                form.reset();
            } else {
                feedbackDiv.innerHTML = `<p class="text-danger">Please fill out all fields.</p>`;
            }
        });
    }
});

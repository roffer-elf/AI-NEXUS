// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const demoButtons = document.querySelectorAll('.interactive-demo');

    demoButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Check our projects');
        });
    });
});

// Toggle menu on button click
document.getElementById("menu-toggle").addEventListener("click", function() {
    const navList = document.querySelector("nav ul");
    navList.classList.toggle("active"); // Toggle the 'active' class to show/hide menu
});


document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 600) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo-img');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        logo.style.transform = 'scale(0.8)';
    } else {
        header.classList.remove('scrolled');
        logo.style.transform = 'scale(1)';
    }
});
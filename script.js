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

// Función para cambiar entre Modo Oscuro y Modo Claro
function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
}

// Función para cargar el tema preferido al cargar la página
function loadTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
}

// Ejecuta la función para cargar el tema al iniciar la página
window.addEventListener("DOMContentLoaded", loadTheme);

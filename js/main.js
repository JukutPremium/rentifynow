// JavaScript to handle menu toggle with animations
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden")
})
let menubar = document.querySelector(".hamburger-menu")
let navbar = document.querySelector(".links")

menubar.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
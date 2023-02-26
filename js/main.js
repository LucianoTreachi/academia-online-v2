////////// RESPONSIVE MENU ////////// 
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navbar = document.querySelector("nav .navbar");
const navLinks = document.querySelectorAll(".navbar a");

openMenu.addEventListener('click', () => {
  navbar.classList.add("active");
});

closeMenu.addEventListener('click', () => {
  navbar.classList.remove("active");
});

navLinks.forEach((e) => {
  e.addEventListener('click', () => {
    navbar.classList.remove("active");
  })
});


////////// SCROLL TO TOP //////////
const scrollTopBtn = document.querySelector(".scrollToTop-Btn");
  
window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});
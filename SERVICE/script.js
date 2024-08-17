
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
// 
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.clickable');

  images.forEach(image => {
      image.addEventListener('click', () => {
          const link = image.getAttribute('data-link');
          window.location.href = link;
      });
  });
});

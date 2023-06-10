import 'animate.css';
{
    const nav = document.querySelector(".nav-bar");
    let lastScrollY = window.scrollY;
   
    window.addEventListener('scroll', () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add("nav--hidden");
      } else {
        nav.classList.remove("nav--hidden");
      }
   
      lastScrollY = window.scrollY;
  })
}

const toggleBtn = document.querySelector('.dropdown');
const dropDown = document.querySelector('dropdown-menu');

document.addEventListener("DOMContentLoaded", function() { 
  const toggleBtn = document.querySelector('.dropdown');
   const dropDown = document.querySelector('dropdown-menu');
  toggleBtn.onclick = () => {
    toggleBtn.classList.add('test');
}
});





  


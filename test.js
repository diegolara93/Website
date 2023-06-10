document.addEventListener("DOMContentLoaded", function() { 
    const toggleBtn = document.querySelector('.dropdown');
     const dropDown = document.querySelector('.dropdown-menu');
    toggleBtn.onclick = () => {
      toggleBtn.classList.toggle('drop');
      const isOpen = toggleBtn.classList.contains('drop')
      dropDown.classList = isOpen 
      ? 'dropdown-menu'
      : 'clicked'
  }
  });


  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector(".nav-bar").style.opacity = "1";
    document.querySelector(".clicked").style.opacity = "1";
  } else {
    document.querySelector(".nav-bar").style.opacity = "0";
    document.querySelector(".clicked").style.opacity = "0";
  }
}

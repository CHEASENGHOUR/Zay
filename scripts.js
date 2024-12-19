// const menuToggle = document.querySelector('.menu-toggle');
// const navLinks = document.querySelector('.nav-links');

// menuToggle.addEventListener('click', () => { 
//   navLinks.classList.toggle('active');

// });
// Select menu toggle button and navigation links
// Select menu toggle button and navigation links
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('toggle');
  const navLinks = document.getElementById('navlink');

  menuToggle.addEventListener('click', () => {
    console.log('Toggle clicked');
    navLinks.classList.toggle('active');
  });
});




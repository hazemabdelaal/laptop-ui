const navLinks = document.querySelector('.nav-links');
const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
  if (navLinks.style.display == 'block') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'block';
  }
});

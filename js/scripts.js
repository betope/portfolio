// Show navigation
let btnMenu = document.querySelector('.btn-menu').addEventListener('click', () => {
  let navigation = document.querySelector('.navigation');
  navigation.style.display = 'block';
});

// Hide navigation
let btnCloseMenu = document.querySelector('.btn-close-menu').addEventListener('click', () => {
  let navigation = document.querySelector('.navigation');
  navigation.style.display = 'none';
});
const btnMenu = document.getElementById('js-btn-menu-mobile');
const overlayMenu = document.querySelector('.js-overlay');
const menuLinks = document.querySelectorAll('.js-menu-link');

function openMenu() {
  document.documentElement.classList.toggle('menu-opened');
}

function closeMenu() {
  document.documentElement.classList.remove('menu-opened');
}

btnMenu.addEventListener('click', openMenu);
overlayMenu.addEventListener('click', closeMenu);

menuLinks.forEach(function(link) {
  link.addEventListener('click', closeMenu);
});
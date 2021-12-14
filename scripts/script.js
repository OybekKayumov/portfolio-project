const menuOpenButton = document.querySelector('#menu-open-icon');
const menuCloseButton = document.querySelector('#menu-close-icon');
const mobileMenuList = document.querySelector('#mobile-menu');
const documentBody = document.querySelector('body');
const menuItems = document.querySelectorAll('.option');

menuOpenButton.addEventListener('click', () => {
  mobileMenuList.style.display = 'block';
  documentBody.style.overflow = 'hidden';
});

menuCloseButton.addEventListener('click', () => {
  mobileMenuList.style.display = 'none';
  documentBody.style.overflow = '';
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    mobileMenuList.style.display = 'none';
    documentBody.style.overflow = '';
  });
});
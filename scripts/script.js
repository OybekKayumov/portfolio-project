const menuOpenButton = document.querySelector('#menu-open-icon');
const menuCloseButton = document.querySelector('#menu-close-icon');
const mobileMenuList = document.querySelector('#mobile-menu');
const documentBody = document.querySelector('body');

// mobileMenuList.style.display = 'none';

menuOpenButton.addEventListener('click', () => {
  // console.log('Display: ', mobileMenuList.style.display);
  mobileMenuList.style.display = 'block';
  documentBody.style.overflow = 'hidden';
});

menuCloseButton.addEventListener('click', () => {
  // console.log('Display: ', mobileMenuList.style.display);
  mobileMenuList.style.display = 'none';
  documentBody.style.overflow = '';
});

const menuItems = document.querySelectorAll('.option');

for (const menuItem of menuItems) {
  menuItem.addEventListener('click', () => {
    mobileMenuList.style.display = 'none';
    documentBody.style.overflow = '';
  });
}
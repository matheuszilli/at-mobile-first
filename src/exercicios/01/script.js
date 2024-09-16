const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');

menuToggle.addEventListener('click', () => {
    menuItems.style.display = menuItems.style.display === 'none' || menuItems.style.display === '' ? 'flex' : 'none';
});

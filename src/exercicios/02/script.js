const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');

menuToggle.addEventListener('click', () => {
    if (menuItems.classList.contains('menu-open')) {
        menuItems.classList.remove('menu-open');
    } else {
        menuItems.classList.add('menu-open');
    }
});

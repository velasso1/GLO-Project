'use strict';

const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');

    const handleMenu = function () {
        menu.classList.toggle('active-menu');
    };

    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));
    menuBtn.addEventListener('click', handleMenu);
    closeBtn.addEventListener('click', handleMenu);
};

export default menu;
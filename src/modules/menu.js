'use strict';

const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');

    const toggleMenu = function () {
        menu.classList.toggle('active-menu');
    };

    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-btn')) {
            toggleMenu();
        } else if (e.target.matches('a')) {
            toggleMenu();
        }
    });

    menuBtn.addEventListener('click', toggleMenu);
};

export default menu;
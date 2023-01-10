'use strict';

const modal = () => {
    const modal = document.querySelector('.popup');
    const popup = document.querySelector('.popup-content');
    const buttons = document.querySelectorAll('.popup-btn');
    let clientWidth = document.documentElement.clientWidth;

    let count = 0;

    const animation = function () {
        count += 21;

        popup.style.left = '-200px';
        popup.style.transform = `translateX(${count}px)`;
        modal.style.display = 'block';

        if (count >= clientWidth / 2) {
            cancelAnimationFrame(animation);
            count = 0;
        } else {
            requestAnimationFrame(animation);
        }
    };

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (clientWidth < 768) {
                modal.style.display = 'block';
            } else {
                animation();
            }
        });
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    });
};

export default modal;
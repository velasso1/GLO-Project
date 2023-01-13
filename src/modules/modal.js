'use strict';

import { animate } from './helpers';

const modal = () => {
    const modal = document.querySelector('.popup');
    const popup = document.querySelector('.popup-content');
    const buttons = document.querySelectorAll('.popup-btn');
    let clientWidth = document.documentElement.clientWidth;

    let count = 0;


    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (clientWidth < 768) {
                modal.style.display = 'block';
            } else {
                popup.style.left = '-300px';
                animate({
                    duration: 800,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modal.style.display = 'block';
                        popup.style.transform = `translateX(${progress * 210}%)`;
                        modal.style.width = progress * 100 + '%';
                    }
                });
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
'use strict';

const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = document.querySelectorAll('.portfolio-item');
    const dotList = document.querySelector('.portfolio-dots');

    let interval;
    let currentSlide = 0;
    let timeInterval = 2000;
    let dots = document.querySelectorAll('.dot');


    const addDots = function () {
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('li');
            dot.classList.add('dot');
            dotList.append(dot);
        }

        dots = document.querySelectorAll('.dot');
        dots[0].classList.add('dot-active');
    };

    const nextSlide = function (elems, index, strClass) {
        elems[index].classList.add(strClass);
    };

    const prevSlide = function (elems, index, strClass) {
        elems[index].classList.remove(strClass);
    };

    const autoSlide = function () {
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    };

    const startSlide = function (timer = 1500) {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = function () {
        clearInterval(interval);
    };

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches('.dot, .portfolio-btn')) {
            return;
        }

        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');

        if (e.target.matches('#arrow-right')) {
            currentSlide++;

        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;

        } else if (e.target.classList.contains('dot')) {
            dots.forEach(function (dot, index) {
                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    });

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    }, true);

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval);
        }
    }, true);

    addDots();
    startSlide(timeInterval);
};

export default slider;
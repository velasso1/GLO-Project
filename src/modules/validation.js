'use strict';

const validation = () => {
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');

    const formName = document.querySelectorAll('.form-name');
    const formEmail = document.querySelectorAll('.form-email');
    const formPhone = document.querySelectorAll('.form-phone');
    const mess = document.querySelector('.mess');

    calcSquare.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/, '');
    });

    calcCount.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/, '');
    });

    calcDay.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/, '');
    });


    formPhone.forEach(function (form) {
        form.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9()-]/, '');
        });
    });

    formEmail.forEach(function (form) {
        form.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z0-9@-_.!~*']/, '');
        });
    });

    formName.forEach(function (form) {
        form.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я- ]/, '');
        });
    });

    mess.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я- ]/, '');
    });


};

export default validation;
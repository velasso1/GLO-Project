'use strict';

import validator from "./validator";

const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка';
    const successText = 'Спасибо! Наш менеджер с Вами свяжется.';

    form.querySelectorAll('input').forEach(input => {
        input.removeAttribute('required');
    });

    const validate = (list) => {

        let success = true;

        validator(list);



        list.forEach(input => {
            if (input.classList.contains('error')) { success = false; }
        });

        return success;
    };

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            if (key === "user_message" && val === "") {
                return;
            } else {
                formBody[key] = val;
            }

        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);

            if (elem.type === 'block' && element.textContent != 0) {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input' && element.value != "") {
                formBody[elem.id] = element.value;
            }
        });

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText;

                    setTimeout(() => {
                        statusBlock.remove();
                    }, 3000);

                    formElements.forEach(input => {
                        input.value = '';
                    });
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                });
        } else {
            statusBlock.style.color = 'white';
            statusBlock.textContent = 'Некорректный ввод';

            setTimeout(() => {
                statusBlock.remove();
            }, 3000);
        }
    };

    try {
        if (!form) {
            throw new Error('Пожалуйста, верните форму на место');
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }
};

export default sendForm;
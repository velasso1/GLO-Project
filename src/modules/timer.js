'use strict';

const timer = (deadline) => {
    const timerHours = document.querySelector('#timer-hours');
    const timerMinutes = document.querySelector('#timer-minutes');
    const timerSeconds = document.querySelector('#timer-seconds');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');

        if (dateStop < dateNow) {
            clearInterval(updateInt);
            hours = '00';
            minutes = '00';
            seconds = '00';
        }

        return { timeRemaining, hours, minutes, seconds };
    };

    const updateClock = () => {
        let getTime = getTimeRemaining();

        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;

        if (getTime.timeRemaining === 0) {
            clearInterval(updateInt);
        }
    };

    let updateInt = setInterval(updateClock, 1000);

};

export default timer;
const timer = (id, deadline) => {
    const addZero = num => num <= 9 ? "0" + num : num;

    const getTimeRemaining = (endtime) => {
        // Получаем сколько времени осталось до дедлайна
        // new Date() - текущая дата
        const time = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((time / 1000) % 60), // секунды делим на 60 секунд, остаток = кол-во секунд
            minutes = Math.floor((time / 1000 / 60) % 60), // секунды / секунды / минуты, остаток минуты
            hours = Math.floor((time / (1000 * 60 * 60)) % 24), // милисек/(1000* 60*60) отстаток от 24 часов
            days = Math.floor(time / (1000 * 60 * 60 * 24)); // остаток дней

        return {
            total: time,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        };
    };

    const setClock = (selector, endtime) => {

        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const time = getTimeRemaining(endtime); // getTimeRemaining возвращает объект
            // Внедряем в html значения из объекта getTimeRemaining
            days.textContent = addZero(time.days);
            hours.textContent = addZero(time.hours);
            minutes.textContent = addZero(time.minutes);
            seconds.textContent = addZero(time.seconds);

            if (time.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";

                clearInterval(timeInterval);
            }
        }
    };

    setClock(id, deadline);
};
export default timer;
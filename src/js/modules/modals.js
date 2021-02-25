const modals = () => {
    const scroll = calclScroll();

    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay='true') {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(item => {
            item.addEventListener('click', (event) => {
                if (event.target) {
                    event.preventDefault(); // Отменили стандартное поведение браузера на случай если кнопка это ссылка
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                if (event.target.classList.contains('popup_engineer_btn')) {
                    showModal('.popup_engineer');
                    clearTimeout(modalTimerId);
                }

                if (event.target.classList.contains('phone_link')) {
                    showModal('.popup2');
                    clearTimeout(modalTimerId);
                }

                if (event.target.classList.contains('popup_calc_btn')) {
                    showModal('.popup_calc');
                    clearTimeout(modalTimerId);
                }

                if (event.target.classList.contains('popup_calc_button')) {
                    showModal('.popup_calc_profile');
                }

                if (event.target.classList.contains('popup_calc_profile_button')) {
                    showModal('.popup_calc_end');
                }
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
            // document.body.classList.remove('.modal-open');
        });

        modal.addEventListener('click', (event) => {
           if (event.target === modal && closeClickOverlay) {
               windows.forEach(item => {
                   item.style.display = 'none';
               });

               modal.style.display = "none";
               document.body.style.overflow = "";
               document.body.style.marginRight = `0px`;
               // document.body.classList.remove('.modal-open');
           }
        });
    }

    // Технические функции
    // Автозапуск модального окна
    function autoShowModal() {
        showModal('.popup');
    }

    const modalTimerId = setTimeout(autoShowModal, 60000);

    function showModal(selector) {
        document.querySelector(selector).style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
    }

    // Устраняем дергание окна из-за появления/изчезания полосы прокрутки справа
    function calclScroll() {
        let div = document.createElement('div'); // Временный блок для вычисления ширины окна без скролла

        // стили
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div)

        let scrollWidth = div.offsetWidth - div.clientWidth; // Вся ширина - ширина без скролла
        div.remove(); // Удаляем временный блок div

        return scrollWidth;
    }


    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup2', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
};

export default modals;

// const modals = () => {
//     function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
//         const trigger = document.querySelectorAll(triggerSelector),
//             modal = document.querySelector(modalSelector),
//             close = document.querySelector(closeSelector),
//             windows = document.querySelectorAll('[data-modal]'),
//             scroll = calcScroll();
//
//         trigger.forEach(item => {
//             item.addEventListener('click', (e) => {
//                 if (e.target) {
//                     e.preventDefault();
//                 }
//
//                 windows.forEach(item => {
//                     item.style.display = 'none';
//                 });
//
//                 modal.style.display = "block";
//                 document.body.style.overflow = "hidden";
//                 document.body.style.marginRight = `${scroll}px`;
//                 // document.body.classList.add('modal-open');
//             });
//         });
//
//         close.addEventListener('click', () => {
//             windows.forEach(item => {
//                 item.style.display = 'none';
//             });
//
//             modal.style.display = "none";
//             document.body.style.overflow = "";
//             document.body.style.marginRight = `0px`;
//             // document.body.classList.remove('modal-open');
//         });
//
//         modal.addEventListener('click', (e) => {
//             if (e.target === modal && closeClickOverlay) {
//                 windows.forEach(item => {
//                     item.style.display = 'none';
//                 });
//
//                 modal.style.display = "none";
//                 document.body.style.overflow = "";
//                 document.body.style.marginRight = `0px`;
//                 // document.body.classList.remove('modal-open');
//             }
//         });
//     }
//
//     function showModalByTime(selector, time) {
//         setTimeout(function() {
//             document.querySelector(selector).style.display = 'block';
//             document.body.style.overflow = "hidden";
//         }, time);
//     }
//
//     function calcScroll() {
//         let div = document.createElement('div');
//
//         div.style.width = '50px';
//         div.style.height = '50px';
//         div.style.overflowY = 'scroll';
//         div.style.visibility = 'hidden';
//
//         document.body.appendChild(div);
//         let scrollWidth = div.offsetWidth - div.clientWidth;
//         div.remove();
//
//         return scrollWidth;
//     }
//
//     bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
//     bindModal('.phone_link', '.popup', '.popup .popup_close');
//     bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
//     bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
//     bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
//     // showModalByTime('.popup', 60000);
// };
//
// export default modals;

const slider = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');

    // рендерим слайдер в html
    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);
    imgPopup.appendChild(bigImage);

    // стили для слайдера
    imgPopup.style.display = 'none';
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';

    workSection.addEventListener('click', (event) => {
        event.preventDefault(); // отключаем стандартное поведение браузера
        const target = event.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        // matches() - метод ищущий совпадения. Передаем селектор div с классом popup
        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
};

export default slider;
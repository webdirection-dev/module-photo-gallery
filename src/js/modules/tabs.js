const tabs = ({headerSelector, tabSelector, contentSelector, activeClass, display='block'}) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    hideTabContent();
    showTabContent();

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        })

        tab.forEach(item => {
            item.classList.remove(activeClass);
        })
    }

    function showTabContent(target = 0) {
        content[target].style.display = display;
        tab[target].classList.add(activeClass);
    }

    // Делигирование событий Parent
    header.addEventListener('click', (event) => {
        const target = event.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, '')) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
            tab.forEach((item, index) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(index);
                }
            });
        }
    });

}

export default tabs;
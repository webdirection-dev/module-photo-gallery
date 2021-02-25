import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems (event, elem, prop) {
        elem.forEach((item, index) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN' :
                        state[prop] = index;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {
                            index === 0 ? state[prop] = 'Cold' : state[prop] = 'Hot';
                            elem.forEach((box, count) => {
                                box.checked = false;
                                if (count === index) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;
                }

                console.log(state);
            });
        });
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowWidth, 'height');
    bindActionToElems('input', windowHeight, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');

};

export default changeModalState;
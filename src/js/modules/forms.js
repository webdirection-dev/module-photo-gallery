import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');

    const message = {
      loading: 'Loading...',
      success: 'Thank you.',
      error: 'Error!',
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let result = await fetch(url, {
            method: 'POST',
            body: data,
        });

        return await result.text();
    };

    // Очистить форму
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
     item.addEventListener('submit', (event) => {
         event.preventDefault(); // отменяем перезагрузку браузера после отправки формы

         let statusMessage = document.createElement('div'); // создаем новый элемент верстки
         statusMessage.classList.add('status');
         item.appendChild(statusMessage); // Внедряем новый элемент в вёрстку

         const formData = new FormData(item);
         if (item.getAttribute('data-calc') === "end") {
             for (let key in state) {
                 formData.append(key, state[key]);
             }
         }

         postData('./assets/server.php', formData)
             .then(result => {
                 console.log(result);
                 statusMessage.textContent = message.success;
             })
             .catch(() => {
                 statusMessage.textContent = message.error;
             })
             .finally(() => {
                clearInputs();
                setTimeout(() => {
                    statusMessage.remove();
                    document.querySelector('.popup_calc_end').style.display = "none";
                    document.body.style.overflow = "";
                }, 5000);
             })
     });
    });
};

export default forms;
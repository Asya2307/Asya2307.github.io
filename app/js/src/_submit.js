document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.querySelector('.js-phone-mask');
    const emailInput = document.querySelector('.js-email-mask');
    const maskOptions = {
        mask: '+{7}(000)000-00-00'
    };
    const maskOptionsEmail = {
        mask: /^\S*@?\S*$/
    };


    IMask(phoneInput, maskOptions);
    IMask(emailInput, maskOptionsEmail);

    const form = document.querySelectorAll('.form__contact');

    if (form) {
        form.forEach((item) => {
            item.addEventListener('submit', (event) => {
                event.preventDefault();

                const formInput = event.target;

                const email = formInput.querySelector('.js-email-mask');
                const name = formInput.querySelector('.js-name-input');

                const emailValue = email.value;
                const nameValue = name.value;

                const fields = [
                    {
                        element: email,
                        value: emailValue,
                    },
                    {
                        element: name,
                        value: nameValue,
                    },
                ];

                fields.forEach((field) => {
                    if (field.value.length > 0) {
                        if (field.element.closest('.form__item').classList.contains('is-invalid')) {
                            field.element.closest('.form__item').classList.remove('is-invalid');
                        }
                    } else {
                        field.element.closest('.form__item').classList.add('is-invalid');
                    }
                });

                const invaslidFields = [...formInput.querySelectorAll('.is-invalid')];

                if (invaslidFields.length === 0) {
                }
            })
        })
    }

    const fileInput = document.querySelectorAll('.form__download-input');

    if (fileInput) {
        fileInput.forEach((item) => {
            item.addEventListener('change', (e) => {
                if (e.target.value) {
                    const fileName = e.target.value;
                    e.target.closest('.form__download').querySelector('.form__download-custom').innerHTML = `${fileName}`;
                    e.target.closest('.form__download').querySelector('.btn--reset').classList.add('active')
    
                } else {
                    e.target.closest('.form__download').querySelector('.form__download-custom').innerHTML = `Прикрепите файл`;
                    e.target.closest('.form__download').querySelector('.btn--reset').classList.remove('active')
                }
            })
        })

        document.querySelectorAll('.js-reset-file').forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.currentTarget.classList.remove('active');
                e.target.closest('.form__download').querySelector('.form__download-custom').innerHTML = `Прикрепите файл`;
                e.target.closest('.form__download').querySelector('.form__download-input').value = ''
            })
        })
    } 
    



})
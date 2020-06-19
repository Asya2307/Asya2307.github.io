document.addEventListener('DOMContentLoaded', () => {
    const openPopup = document.querySelectorAll('.js-open-form');
    if (openPopup) {
        openPopup.forEach((item) => {
            const popupTitle = document.querySelectorAll('.form__contact-title')
            item.addEventListener('click', (e) => {
                const dataTitle = e.target.getAttribute('data-title');
                popupTitle.forEach((item) => {
                       item.innerHTML = dataTitle 
                })
                document.querySelector('.form__popup').classList.add('active')
                document.querySelector('.form__popup').classList.add('menu_open')
            })
        })

        document.querySelectorAll('.js-popup__close').forEach((item) => {
            item.addEventListener('click', (e) => {
                e.target.closest('.form__popup').classList.remove('active')
                e.target.closest('.form__popup').classList.remove('menu_open')
            })
        })
    }
    
})
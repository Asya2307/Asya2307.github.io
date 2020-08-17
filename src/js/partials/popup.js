const popup = document.querySelectorAll('[data-open]');
const popupClose = document.querySelectorAll('.js-popup-close')
if (popup) {

    const openPopup = (e) => {
        let dataPopup = e.currentTarget.getAttribute('data-open');
        document.querySelector(`[data-popup='${dataPopup}']`).classList.add('active');
            addHiddenBody(document.querySelector('.content'));
    }

    popup.forEach((item) => {
        item.addEventListener('click', openPopup)
    });

    popupClose.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.currentTarget.closest('.js-popup').classList.remove('active');
            removeHiddenBody(document.querySelector('.content'))
        });
    })
}
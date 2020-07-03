document.querySelectorAll('.js-open-faq').forEach((item) => {
    item.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('active')
    })
});
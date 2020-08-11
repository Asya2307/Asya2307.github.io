const cookiesShow = document.querySelector('.js-shown-cookie');

if (cookiesShow) {
    setTimeout(() => {
        cookiesShow.classList.add('active')
    }, 7000)
    const cookiesClose = document.querySelector('.js-shown-cookie');

    cookiesClose.addEventListener('click', (e) => {
        e.target.closest('.cookies').classList.remove('active');
    })
}
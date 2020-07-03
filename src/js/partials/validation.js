const form = document.querySelectorAll('.js-form');

const cleaveMaskPhone = document.querySelectorAll('.js-phone-mask')

if (cleaveMaskPhone) {
    cleaveMaskPhone.forEach((item) => {
        item.addEventListener('focus', (e) => {
            new Cleave(e.currentTarget, {
                phone: true,
                phoneRegionCode: 'ru',
                prefix: '+7'
            });
        })
    });
};

if (form) {
    form.forEach((item) => {
        item.addEventListener('submit', Validation)
    });

    function Validation(e) {
        e.preventDefault();
        const nameInput = e.currentTarget.querySelector('.js-input-name');
        const phoneInput = e.currentTarget.querySelector('.js-input-phone');
        const emailInput = e.currentTarget.querySelector('.js-input-email')
        const textareaInput = e.currentTarget.querySelector('.js-input-textarea');
        const checkboxInput = e.currentTarget.querySelector('.js-input-checkbox');

        
    }
}





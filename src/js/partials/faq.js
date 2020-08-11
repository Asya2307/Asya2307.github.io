const faqItem = document.querySelectorAll('.js-faq-item');
const faqButtonAll = document.querySelectorAll('.js-open-faq')

if (faqItem) {
    faqItem.forEach((item, index) => {
        item.setAttribute('style', `z-index: ${index + 1}`);
        const faqButton = item.querySelector('.js-open-faq');
        faqButton.addEventListener('click', (e) => {
            faqButtonAll.forEach((item) => {
                item.classList.remove('active');
            });
            faqItem.forEach((item) => {
                item.classList.remove('active');
            });
            if(!e.currentTarget.classList.contains('active')) {
                e.currentTarget.classList.add('active');
                e.currentTarget.closest('.js-faq-item').classList.add('active');
            } else {
                e.currentTarget.classList.remove('active');
                e.currentTarget.closest('.js-faq-item').classList.remove('active');
            }
        });
    });
}


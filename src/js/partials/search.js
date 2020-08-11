const searchInput = document.querySelectorAll('.js-search-input');
const searchButton = document.querySelector('.form__search-button');

if (searchInput) {
    searchInput.forEach((item) => {

        const buttonVisible = (e) => {
            const inputValue = e.currentTarget.value;
            inputValue ? searchButton.removeAttribute('disabled') : searchButton.setAttribute('disabled', true);
        };
        
        item.addEventListener('input', buttonVisible);
    });
}


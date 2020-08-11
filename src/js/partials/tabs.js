const tabsButton = document.querySelectorAll('.js-tabs-button');

if (tabsButton) {
    const tabsSwitch = (e) => {
        tabsButton.forEach((item) => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.tabs__inner-item').forEach((item) => {
            item.classList.remove('active');
        })
        const dataTab = e.currentTarget.getAttribute('data-tab');
        document.getElementById(`${dataTab}`).classList.add('active');
        e.currentTarget.classList.add('active')
    }

    tabsButton.forEach((item) => {
        item.addEventListener('click', tabsSwitch)
    })
}
const equipmentItem = document.querySelectorAll('.js-equipment__link');
const windowWidth = window.outerWidth

if (windowWidth > 768) {
    if (equipmentItem) {
        const mouseOver = (e) => {
            const equipmentImg = e.currentTarget.querySelector('.js-equipment-tooltip');
            equipmentImg.style.transform = `translate(calc(${e.layerX}px - 50%), calc(${e.layerY}px - 103%))`;
        };
    
        equipmentItem.forEach((item) => {
            item.addEventListener('mousemove', mouseOver);
        });
    }
}
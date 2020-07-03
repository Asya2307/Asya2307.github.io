// Свайпер
(function(){

    // Основной слайдер на главной странице
    if(document.querySelector(".js-main-slider")){

        let mainSwiper = new Swiper(".js-main-slider", {
            init: false,
            speed: 1200,
            loop: false,
            direction: "vertical",
            watchOverflow: true,
            navigation: {
                nextEl: ".main-slider__arrow--down",
                prevEl: ".main-slider__arrow--up",
            },
        });
    
        if(mainSwiper.wrapperEl.children.length > 1){
            mainSwiper.params.loop = true;
            mainSwiper.init();
        }else{
            mainSwiper.init();
        };

    };

    // Слайдер проблем на главной странице
    let problemSliderIsActive = false;

    function createProblemsSlider(){
        let problemsSwiper = new Swiper(".js-problems-slider", {
            speed: 900,
            loop: true,
            direction: "vertical",
            navigation: {
                nextEl: ".problems-slider__arrow--down",
                prevEl: ".problems-slider__arrow--up",
            },
        });

        problemSliderIsActive = true;
    
        problemsSwiper.on("resize", function(){
            if(document.documentElement.clientWidth < 1083){
                problemsSwiper.destroy();
                problemSliderIsActive = false;
            };
        });
    };

    window.addEventListener("load", function(){
        if(document.documentElement.clientWidth > 1083 && document.querySelector(".js-problems-slider")){
            createProblemsSlider();
        };
        var sliderBeforeAfter = new Swiper('.js-before-after-slider', {
            speed: 400,
            slidesPerView: 1,
            loop: true,
            spaceBetween: 150,
            navigation: {
                nextEl: '.slider__nav--before-after .slider__nav-item--next',
                prevEl: '.slider__nav--before-after .slider__nav-item--prev',
            },
            breakpoints: {
                768: {
                  slidesPerView: 2,
                }
              }
        });
    });

    window.addEventListener("resize", function(){
        if(document.documentElement.clientWidth > 1083 && document.querySelector(".js-problems-slider")){
            if(!problemSliderIsActive){
                createProblemsSlider();
            };
        };
    });
})();

// Скрыть/показать мнею в шапке
(function(){

    const burgerButton = document.querySelector(".burger");
    if(burgerButton){
        burgerButton.addEventListener("click", changeMenuState);
    };

    function changeMenuState(){
        document.body.classList.toggle("js-burger-menu-is-open");

        if(!burgerButton.classList.contains("js-burger-is-open")){
            burgerButton.classList.add("js-burger-is-open");
        }else if(burgerButton.classList.contains("js-burger-is-open")){
            burgerButton.classList.remove("js-burger-is-open");
        };
    };
    
})();

// Прилипающая шапка
(function(){

    const pageHeader = document.querySelector("header");
    if(pageHeader){
        window.addEventListener("scroll", stickHeader);
        window.addEventListener("load", stickHeader);
        window.addEventListener("resize", checkStick);
    };

    const startStickPoint = 700;
    const minStickWidth = 1300;

    function stickHeader(){

        if(document.documentElement.clientWidth < minStickWidth){
            return false;
        };

        if(window.pageYOffset > startStickPoint){
            if(!pageHeader.classList.contains("head--sticky")){
                pageHeader.classList.add("head--sticky");
            };
        }else if(window.pageYOffset < startStickPoint){
            if(pageHeader.classList.contains("head--sticky")){
                pageHeader.classList.remove("head--sticky");
            };
        };
    };

    function checkStick(){
        if(document.documentElement.clientWidth < minStickWidth){
            if(pageHeader.classList.contains("head--sticky")){
                pageHeader.classList.remove("head--sticky");
            };
            if(window.pageYOffset > 0){
                if(document.body.classList.contains("js-burger-menu-is-open")){
                    document.body.classList.remove("js-burger-menu-is-open");
                };

                const burgerButton = document.querySelector(".burger");

                if(burgerButton && burgerButton.classList.contains("js-burger-is-open")){
                    burgerButton.classList.remove("js-burger-is-open");
                };
            };
        }else if(document.documentElement.clientWidth > minStickWidth && window.pageYOffset > startStickPoint){
            if(!pageHeader.classList.contains("head--sticky")){
                pageHeader.classList.add("head--sticky");
            };
        };
    };


})();

// Интро для главной страницы
(function(){

    window.addEventListener("load", closeIntro);

    function closeIntro(){
        if(document.body.classList.contains("js-intro-is-shown")){
            document.body.classList.remove("js-intro-is-shown");
        };
    };

})();

// Кастомные селекты
(function(){

    /*let branches = [
        {
            value: "branch-01",
            coordinates: [55.154820, 61.394523]
        },
        {
            value: "branch-02",
            coordinates: [55.173355, 61.306164]
        },
        {
            value: "branch-03",
            coordinates: [55.195015, 61.334515]  
        },
        {
            value: "branch-04",
            coordinates: [55.160545, 61.378281]
        }
    ];*/

    document.addEventListener('DOMContentLoaded', function() {
        let choicesBlack = document.querySelectorAll("[data-choices-black]");
        for (i = 0; i < choicesBlack.length; ++i) {
            let choicesItem = choicesBlack[i];
            new Choices(choicesItem, {
                silent: false,
                searchEnabled: false,
                resetScrollPosition: true,
                classNames: {
                    containerOuter: "choices choices--black",
                    containerInner: "choices__inner choices__inner--black",
                    item: "choices__item choices__item--black",
                },
            });
        };

        let choicesWhite = document.querySelectorAll("[data-choices-white]");
        for (i = 0; i < choicesWhite.length; ++i) {
            let choicesItem = choicesWhite[i];
            new Choices(choicesItem, {
                silent: false,
                searchEnabled: false,
                resetScrollPosition: true,
                classNames: {
                    containerOuter: "choices choices--white",
                    containerInner: "choices__inner choices__inner--white",
                    item: "choices__item choices__item--white",
                },
            });
        };
    });

})();

// Яндекс-карта
// Инициализация карты Яндекс
if(document.getElementById("map")){
    ymaps.ready(init);
    function init(){ 
        let locationMap = new ymaps.Map("map", {
            center: [55.176234, 61.364842],
            zoom: 13
        }),
    
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
        
        branchPlacemark01 = new ymaps.Placemark([55.154820, 61.394523], {
            hintContent:"",
            balloonContent:""
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../images/pin.png',
            iconImageSize: [52, 52],
            iconImageOffset: [0, 0]
        });

        branchPlacemark02 = new ymaps.Placemark([55.195015, 61.334515], {
            hintContent:"",
            balloonContent:""
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../images/pin.png',
            iconImageSize: [52, 52],
            iconImageOffset: [0, 0]
        });

        branchPlacemark03 = new ymaps.Placemark([55.160545, 61.378281], {
            hintContent:"",
            balloonContent:""
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../images/pin.png',
            iconImageSize: [52, 52],
            iconImageOffset: [0, 0]
        });

        branchPlacemark04 = new ymaps.Placemark([55.173355, 61.306164], {
            hintContent:"",
            balloonContent:""
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../images/pin.png',
            iconImageSize: [52, 52],
            iconImageOffset: [0, 0]
        });
    
        locationMap.geoObjects
            .add(branchPlacemark01)
            .add(branchPlacemark02)
            .add(branchPlacemark03)
            .add(branchPlacemark04)
    
        locationMap.behaviors.disable("scrollZoom");
        locationMap.controls.remove("searchControl");
        locationMap.controls.remove("rulerControl");
        locationMap.controls.remove("typeSelector");
        locationMap.controls.remove("trafficControl");
        locationMap.controls.remove("geolocationControl");
        locationMap.controls.remove("fullscreenControl");
        locationMap.controls.remove("routeButtonControl");
    };    
};

// До и после
(function(){

    var swiper = new Swiper('.js-before-after-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });


    let beforeAfterElements = document.querySelectorAll(".js-before-after-container");

    window.addEventListener("load", function(){

        if(beforeAfterElements){
            calculateBeforeAfter();
            window.addEventListener("resize", updateBeforeAfter);
        };
    })

    function updateBeforeAfter(){
        calculateBeforeAfter("recalc");
    };

    function calculateBeforeAfter(recalcCheck){
        for(let i = 0; i < beforeAfterElements.length; i++){
            let overlay = beforeAfterElements[i].querySelector(".js-before-after-overlay");
            if(overlay){
                beforeAfterElements[i].overlay = overlay;

                beforeAfterElements[i].offset = beforeAfterElements[i].getBoundingClientRect().left - 8;

                beforeAfterElements[i].width = beforeAfterElements[i].getBoundingClientRect().right - beforeAfterElements[i].getBoundingClientRect().left;

                beforeAfterElements[i].height = (window.pageYOffset + beforeAfterElements[i].getBoundingClientRect().bottom) - (window.pageYOffset + beforeAfterElements[i].getBoundingClientRect().top);

                beforeAfterElements[i].step = Math.round(beforeAfterElements[i].width / 100);

                beforeAfterElements[i].skewCompensation = beforeAfterElements[i].height / 20;
                if(!recalcCheck){
                    beforeAfterElements[i].addEventListener("mouseenter", addMouseMoveListener);
                    beforeAfterElements[i].addEventListener("mouseleave", resetOverlayWidth);
                };
            };
        };
    };

    function resetOverlayWidth(){
        clearInterval(widthChange);
        this.overlay.removeAttribute("style");
        this.removeEventListener("mousemove", calcOverlayWidth);
        currentWidth = 0;
        neededWidth = 0;
    };

    let currentWidth = 0;
    let neededWidth = 0;
    let widthChange;

    function addMouseMoveListener(){
        if(document.documentElement.clientWidth > 1283){
            let overlay = this.overlay;
            overlay.style.transition = "none";
            widthChange = setInterval(function(){
                if(currentWidth < neededWidth){
                    currentWidth = currentWidth + 1;
                    overlay.style.width = currentWidth + "%";
                }else if(currentWidth > neededWidth){
                    currentWidth = currentWidth - 1;
                    overlay.style.width = currentWidth + "%";
                };
            }, 5)
            this.addEventListener("mousemove", calcOverlayWidth);
        };
    };

    function calcOverlayWidth(){
        neededWidth = Math.round((event.clientX - this.offset) / this.step + this.skewCompensation);
    };

})();

// Фильтры
(function () {
    
    // Конструктор фильтров в виде селекта
    function SelectFilter(elem){
        let filter = {};

        // Определяет фильтруемый контент для данного фильтра
        filter.theme = elem.getAttribute("data-for");
        let filteredContent = document.querySelectorAll(".js-filtered-content");
        if(filteredContent){
            for(let i = 0; i < filteredContent.length; i++){
                if(filteredContent[i].getAttribute("data-content") == filter.theme){
                    filter.for = filteredContent[i];
                    break;
                };
            };
        };

        // Получает управляющий элемент фильтра
        let filterController = elem.querySelector(".js-select");

        // Проверяет текущий выбранный элементы и выводит контент
        changeFilterContent(filterController, filter.for);

        // При изменении, проверять контент
        filterController.addEventListener("change", changeFilterContent.bind(null, filterController, filter.for));
    };

    // Меняет контент, при изменении выбора в фильтре
    function changeFilterContent(controller, filterContent){

        // Находит все фильтруемые элементы
        let filteredElems = filterContent.querySelectorAll("[data-filter-group]");
        if(filteredElems){

            // Смотрит, к каким параметрам фильтрации подходят
            for(let i = 0; i < filteredElems.length; i++){
                if(filteredElems[i].getAttribute("data-filter-group").includes(controller.value)){
                    if(filteredElems[i].classList.contains("js-content-is-hidden")){
                        filteredElems[i].classList.remove("js-content-is-hidden");
                    };
                }else{
                    if(!filteredElems[i].classList.contains("js-content-is-hidden")){
                        filteredElems[i].classList.add("js-content-is-hidden");
                    };
                };
            };
        };
    };

    // Находим все фильтры на странице и инициализируем
    let filters = document.querySelectorAll(".js-select-filter");
    if(filters){
        for(let i = 0; i < filters.length; i ++){
            let filter = new SelectFilter(filters[i]);
        };
    };

})();

// Фильтры
document.addEventListener('DOMContentLoaded', function() {
    function resizeWatcher() {
        var tableSel = document.querySelectorAll('table');
        var scrollArray = [];
  
        if (tableSel.length) {
          tableSel.forEach(function (item, i) {
            var orgHtml = item.outerHTML;
            item.outerHTML = "<div class='table-scroller".concat(i, "'>").concat(orgHtml, "</div>");
            var ps = new PerfectScrollbar(".table-scroller".concat(i), {
              wheelPropagation: true
            });
            scrollArray.push(ps);
          });
          window.addEventListener('resize', function () {
            if (scrollArray.length) {
              scrollArray.forEach(function (item) {
                item.update();
              });
            }
          });
        }
      }
  
      resizeWatcher();
      
      const actionSlider = document.querySelectorAll('.js-action-slider');

      if (actionSlider) {
        actionSlider.forEach((item) => {
          new Swiper(item, {
            speed: 700,
            slidesPerView: 1,
            loop: true,
            effect: 'fade',
            direction: 'vertical',
            navigation: {
              nextEl: item.querySelector('.action__slider-arrow--left'),
              prevEl: item.querySelector('.action__slider-arrow--right'),
            },
          });
        })
      }
});

// Фильтры
document.addEventListener('DOMContentLoaded', (e) => {
    const specialSlider = document.querySelectorAll('.js-special-slider');

    if (specialSlider) {
        specialSlider.forEach(function(item) {
                 new Swiper(item, {
                    speed: 1200,
                    spaceBetween: 150,
                    slidesPerView: 1,
                    autoHeight: true,
                    loop: true,
                    navigation: {
                        nextEl: ".slider__nav-item--next",
                        prevEl: ".slider__nav-item--prev"
                    },
                    breakpoints: {
                        // when window width is >= 320px
                        768: {
                          slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 3,
                        }
                      }
                })
        })
    }
})

// Faq
document.querySelectorAll('.js-open-faq').forEach((item) => {
    item.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('active')
    })
});

// Validation
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

// Validation
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

// Scroll menu
document.addEventListener('DOMContentLoaded', () => {
    const menuCatalogScroll = new PerfectScrollbar(".js-menu-catalog", {

    });
})
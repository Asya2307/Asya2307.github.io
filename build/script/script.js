const addHiddenBody = (block) => {
    block.style.overflow = 'hidden';
}

const removeHiddenBody = (block) => {
    block.style.overflow = '';
}



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
(function(){

    window.addEventListener("load", closeIntro);

    function closeIntro(){
        if(document.body.classList.contains("js-intro-is-shown")){
            document.body.classList.remove("js-intro-is-shown");
        };
    };

})();
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
(function(){

   


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
                console.log(currentWidth, neededWidth)
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

    const openPopup = document.querySelectorAll('.js-open-popup');


    if (openPopup) {
        openPopup.forEach((item) => {
            item.addEventListener('click', (e) => {
                document.querySelector('.before-after__popup').classList.add('active');
            })
        });
    }

    const closePopup = document.querySelectorAll('.js-close-popup');

    if (closePopup) {
        closePopup.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.currentTarget.closest('.before-after__popup').classList.remove('active');
            })
        });
    }

})();
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

const filterButton = document.querySelectorAll('.js-filters__button');
const filterItems = document.querySelectorAll('.js-employers__item');

if (filterButton) {
    const setItemsStyle = (items, style) => {
        items.style.display = style;
    };
    const filterAct = (e) => {
        const current = e.currentTarget;
        const dataFilter = current.getAttribute('data-filter-info');
        if (dataFilter) {
            const filtersItemCurrent = document.querySelectorAll(`[data-filter='${dataFilter}']`);
            filterItems.forEach((item) => {
                setItemsStyle(item, 'none')
            });
            filtersItemCurrent.forEach((item) => {
                setItemsStyle(item, 'block')
            });
        } else {
            filterItems.forEach((item) => {
                setItemsStyle(item, 'block')
            });
        }
    };
    filterButton.forEach((item) => {
        item.addEventListener('click', filterAct)
    });

    const filterBox = document.querySelector('.js-filter-box');

    if (filterBox) {
        const filterItem = filterBox.querySelectorAll('.js-filter-item');
        filterItem.forEach((item,index) => {
            item.style.zIndex = `${filterItem.length - index}`
        })
    }
}
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
document.addEventListener('DOMContentLoaded', (e) => {
    const specialSlider = document.querySelectorAll('.js-special-slider');

    if (specialSlider) {
        specialSlider.forEach(function(item) {
                 new Swiper(item, {
                    speed: 1200,
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
                          slidesPerView: 2,
                          spaceBetween: 50,
                        },
                        1336: {
                            slidesPerView: 3,
                            spaceBetween: 150
                        }
                      }
                })
        })
    }
})
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
const form = document.querySelectorAll('.js-form');

// const cleaveMaskPhone = document.querySelectorAll('.js-phone-mask')

// if (cleaveMaskPhone) {
//     cleaveMaskPhone.forEach((item) => {
//         item.addEventListener('focus', (e) => {
//             new Cleave(e.currentTarget, {
//                 phone: true,
//                 phoneRegionCode: 'ru',
//                 prefix: '+7'
//             });
//         })
//     });
// };

if (form) {
    
        const validationCheck = (e) => {
            e.preventDefault();
            
    
            // Проверка на обязательность заполнения
            function reqCheck(elem){
                if(elem.hasAttribute("data-req")){
                    validErrors.push(elem);
                };
            };
    
            // Убрать указание об ошибке
            function noErrors(elem){
                let elemParent = elem.parentElement;
                console.log(elemParent)
                // while(!elemParent.classList.contains("form__item")){
                //     elemParent = elemParent.parentElement;
                // };
                if(elemParent.classList.contains("js-valid-error")){
                    elemParent.classList.remove("js-valid-error");
                };
            };
    
            // Проверка прилагаемого файла
            function fileCheck(elem, file){
                if(file.size > 5000000){
                    validErrors.push(elem);
                }else{
                    noErrors(elem);
                };
            };
    
            // Проверка вводимых данных через регулярное выражение
            function valueCheck(elem, val, patrn){
                if(!patrn.test(val)){
                    validErrors.push(elem); 
                }else{
                    noErrors(elem);
                };
            };
    
            // Ищем форму, к которой относится кнопка
            let formInner = e.currentTarget;
            
            while(formInner.tagName != "FORM"){
                formInner = formInner.parentElement
            };
    
            // Ищем все элементы данной формы
            let formElems = formInner.querySelectorAll("input, select, textarea");
            
            // Создаем массив для полей с ошибками
            let validErrors = [];
    
            // Основной цикл проверки на правильность заполнения формы
            for(let i = 0; i < formElems.length; i++){
    
                let elemType;
                if(formElems[i].hasAttribute("type")){
                    elemType = formElems[i].getAttribute("type");
                }else{
                    elemType = formElems[i].getAttribute("data-type");
                }
    
                switch(elemType){

                    // Для инпутов
                    case "text":
                        if(formElems[i].value == ""){ 
                            reqCheck(formElems[i]);
                        }else{
                            switch(formElems[i].getAttribute("name")){
                                case "surname":
                                case "name":
                                    let namePattern = new RegExp("^[a-zа-яё -]{1,}$","i");
                                    valueCheck(formElems[i], formElems[i].value, namePattern);
                                    break;
                                case "phone":   
                                    let phonePattern = new RegExp("^[0-9 ]{7,}$");
                                    valueCheck(formElems[i], formElems[i].value, phonePattern);
                                    break;
                                case "date":   
                                    let datePattern = new RegExp("^[0-9]{1,4}[.]{1}[0-9]{1,4}[.]{1}[0-9]{1,4}$");
                                    valueCheck(formElems[i], formElems[i].value, datePattern);
                                    break;
                                case "mail":
                                    let mailPattern = new RegExp("^[a-z0-9_-]{1,}@{1}[a-z]{1,}[.]{1}[a-z]{2}$","i");
                                    valueCheck(formElems[i], formElems[i].value, mailPattern);
                                    break;
                            };
                        };
                        break;
    
                    // Для текстовых полей
                    case "textarea":
                        if(formElems[i].value == ""){ 
                            reqCheck(formElems[i]);
                        }else{
                            noErrors(formElems[i]);
                        };
                        break;
    
                    // Для селектов
                    case "select":
                        if(formElems[i].value == "choice-1"){
                            reqCheck(formElems[i]);
                        }else{
                            noErrors(formElems[i]);
                        };
                        break;
    
                    // Для чекбоксов
                    case "checkbox":
                        if(!formElems[i].checked){
                            reqCheck(formElems[i]);
                        }else{
                            noErrors(formElems[i]);
                        };
                        break;
    
                    // Для файлов
                    case "file":
                        if(!formElems[i].files[0]){
                            reqCheck(formElems[i]);
                        }else if(formElems[i].files[0]){
                            fileCheck(formElems[i], formElems[i].files[0]);
                        };
                        break;
                };
            };
    
            // Проверка, есть ли поля с ошибками заполнения, отмена отправки, и назначение подсказок об ошибках
            if(validErrors.length){
                event.preventDefault();                
                for(let i = 0; i < validErrors.length; i++){
    
                    let elemParent = validErrors[i].parentElement;

                    while(!elemParent.classList.contains("form__item")){
                        elemParent = elemParent.parentElement;
                    };
                    if(!elemParent.classList.contains("js-valid-error")){
                        elemParent.classList.add("js-valid-error")
                    };
                };
            };
        };

        form.forEach((item) => {
            item.addEventListener('submit', validationCheck)
        });
    

    const formItem = document.querySelectorAll('.js-form-input');

    formItem.forEach((item) => {
        item.addEventListener('focus', (e) => {
            e.currentTarget.closest('.form__item').classList.add('active');
        });
        item.addEventListener('blur', (e) => {
            if (!e.target.value) {
                e.currentTarget.closest('.form__item').classList.remove('active');
            }
        });
    })
}
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
document.addEventListener('DOMContentLoaded', () => {
    const openCatalogButton = document.querySelector('.js-open-catalog');
    if (openCatalogButton) {
       

        const openCatalog = (e) => {
            document.querySelector('.js-menu-catalog').classList.add('active');
            addHiddenBody(document.querySelector('.content'))
        }

        openCatalogButton.addEventListener('click', openCatalog);

        document.querySelector('.js-close-catalog').addEventListener('click', (e) => {
            e.currentTarget.closest('.menu__catalog').classList.remove('active');
            removeHiddenBody(document.querySelector('.content'))
        });
    }

    const popupScroll = document.querySelectorAll('.js-popup-scroll');

    if (popupScroll) {
        popupScroll.forEach((item) => {
                const scrollSwiper = new Swiper(item, {
                    direction: 'vertical',
                    slidesPerView: 'auto',
                    freeMode: true,
                    scrollbar: {
                        el: '.swiper-scrollbar',
                    },
                    mousewheel: true,
                    simulateTouch: false
                });
        });
    };

})
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
const quizStep = document.querySelectorAll('.js-step');

if (quizStep.length) {
    quizStep.forEach((item, index) => {
        item.setAttribute('data-step', index+1);
    });

    quizStep[0].classList.add('active');

    document.querySelector('.js-quiz-all').innerHTML = quizStep.length
    
    const switcherNext = (_this, countTab) => {
        document.querySelector('.js-quiz-current').innerHTML = countTab + 1;
        document.querySelector('[data-tab="prev"]').removeAttribute('disabled');
        document.querySelector(`[data-step='${countTab + 1}']`).classList.add('active');
    }

    const switcherPrev = (_this, countTab) => {
        document.querySelector(`[data-step='${countTab - 1}']`).classList.add('active');
        document.querySelector('.js-quiz-current').innerHTML = countTab - 1;
        if (countTab - 1  == 1) {
            _this.setAttribute('disabled', true);
        }  
    };

    const stepButton = document.querySelectorAll('.js-btn');

    stepButton.forEach((item) => {
        item.addEventListener('click', (e) => {
            const _this = e.currentTarget;
            const direction = _this.getAttribute('data-tab');
            const countTab = parseInt(document.querySelector('.js-step.active').getAttribute('data-step'));
            document.querySelector('.js-step.active').classList.remove('active');
            direction === 'next' ? switcherNext(_this, countTab) : switcherPrev(_this, countTab);
        });
    });

    const resultButton = document.querySelectorAll('.js-slide-button');
    resultButton.forEach((item, index) => {
        item.style.zIndex = `${resultButton.length - index}`
    });
}

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


const gallery = document.querySelectorAll('.js-gallery');

if (gallery) {
    gallery.forEach( (item)=> {
        lightGallery(item); 

        const itemGallery = item.querySelectorAll('.gallery__item');

        const youTubeLink = 'youtube';
        const mapLink = 'google.com/maps';

        const isVideo = (href) => href.includes(youTubeLink);
        const isMap = (href) => href.includes(mapLink);
    

        itemGallery.forEach((item) => {
            const href = item.getAttribute('href');
            if (isVideo(href)) {
                item.classList.add('gallery__item--video');
            };

            if (isMap(href)) {
                item.classList.add('gallery__item--map');
            };
        })
    })
}
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
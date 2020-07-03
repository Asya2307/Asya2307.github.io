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
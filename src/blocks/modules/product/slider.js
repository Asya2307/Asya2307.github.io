$(window).on('load', function() {
    const slider = $('.slider');
    if (slider.length) {
        slider.slick({
            arrows: false, 
        });

        $('.slider__arrow-item--next').on('click', function() {
            $(this).closest('.slider__wrap').find('.slider').slick('slickNext');
        });

        $('.slider__arrow-item--prev').on('click', function() {
            $(this).closest('.slider__wrap').find('.slider').slick('slickPrev');
        });
    }
})
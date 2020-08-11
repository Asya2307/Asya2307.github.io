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

"use strict";

document.addEventListener('DOMContentLoaded', function (e) {
  var specialSlider = document.querySelectorAll('.js-special-slider');

  if (specialSlider) {
    specialSlider.forEach(function (item) {
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
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 3
          }
        }
      });
    });
  }
});
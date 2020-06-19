"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

document.addEventListener('DOMContentLoaded', function (e) {
  if (document.querySelector('.main-page-slider')) {
    var swiperWheel = function swiperWheel(e) {
      if (window.innerWidth > 991) {
        // Переключение секций в элементах без скролла
        if (document.querySelector('.main-page-slider.swiper-no-swiping')) {
          return;
        } else if (!e.target.closest('.scrollable')) {
          if (e.deltaY > 0 || e.wheelDelta < 0) {
            if (!mainSlider.animating) {
              mainSlider.slideNext();
            }
          } else {
            if (!mainSlider.animating) {
              mainSlider.slidePrev();
            }
          }
        } else {
          // Переключение секций в элементах со скроллом
          var elem = e.target.closest('.scrollable');
          var slider = document.querySelector('.main-page-slider');

          if (!slider.classList.contains('swiper-no-swiping')) {
            if (elem.scrollHeight - elem.scrollTop === elem.clientHeight && (e.deltaY > 0 || e.wheelDelta < 0)) {
              if (!mainSlider.animating) {
                mainSlider.slideNext();
              }
            } else if (elem.scrollTop == 0 && (e.deltaY < 0 || e.wheelDelta > 0)) {
              if (!mainSlider.animating) {
                mainSlider.slidePrev();
              }
            }
          }
        }
      }
    };

    // Назначение нужного события прокрутки колесиком
    if ('onwheel' in document) {
      window.addEventListener("wheel", swiperWheel);
    } else if ('onmousewheel' in document) {
      window.addEventListener("mousewheel", swiperWheel);
    } else {
      window.addEventListener("MozMousePixelScroll", swiperWheel);
    }

    var mainSlider;
    var sliderAboutItem = document.querySelector('.js-slider-about');

    if (sliderAboutItem) {
      var _ref;

      mainSlider = new Swiper('.js-slider-about', (_ref = {
        speed: 1200,
        spaceBetween: 0,
        slidesPerView: 2,
        loop: true
      }, _defineProperty(_ref, "spaceBetween", 30), _defineProperty(_ref, "navigation", {
        nextEl: '.news-nav__next',
        prevEl: '.news-nav__prev'
      }), _defineProperty(_ref, "autoplay", {
        delay: 2500
      }), _defineProperty(_ref, "breakpoints", {
        // when window width is >= 320px
        768: {
          slidesPerView: 3
        }
      }), _ref));
    }

    if (window.innerWidth > 991) {
      // Главный слайдер для переключения секций
      mainSlider = new Swiper('.main-page-slider', {
        speed: 600,
        spaceBetween: 0,
        slidesPerView: 'auto',
        direction: 'vertical',
        simulateTouch: false
      }); // Показ фиксированного хедера

      mainSlider.on('slideChangeTransitionStart', function () {
        if (mainSlider.activeIndex > 0) {
          document.querySelector('.header-fixed').classList.add('header-fixed_visible');
        } else {
          document.querySelector('.header-fixed').classList.remove('header-fixed_visible');
        }
      });
    }

    var timeout;
    window.addEventListener('resize', function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        if (window.innerWidth > 991 && !(mainSlider instanceof Swiper)) {
          mainSlider = new Swiper('.main-page-slider', {
            speed: 600,
            spaceBetween: 0,
            slidesPerView: 'auto',
            direction: 'vertical',
            simulateTouch: false
          }); // Показ фиксированного хедера

          mainSlider.on('slideChangeTransitionStart', function () {
            if (mainSlider.activeIndex > 0) {
              document.querySelector('.header-fixed').classList.add('header-fixed_visible');
            } else {
              document.querySelector('.header-fixed').classList.remove('header-fixed_visible');
            }
          });
        } else if (window.innerWidth < 992 && mainSlider instanceof Swiper) {
          mainSlider.destroy();
          mainSlider = false;
        }
      }, 50);
    });
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > window.innerHeight) {
        document.querySelector('.header-fixed').classList.add('header-fixed_visible');
      } else {
        document.querySelector('.header-fixed').classList.remove('header-fixed_visible');
      }
    });
  }

  var openGuide = document.querySelectorAll('.js-guide-open');

  if (openGuide.length) {
    openGuide.forEach(function (item) {
      item.addEventListener('click', function (e) {
        document.querySelector('.guide__popup').classList.add('active');
      });
    });
  }

  var closeGuide = document.querySelectorAll('.js-close-guide');

  if (closeGuide.length) {
    closeGuide.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.currentTarget.closest('.guide__popup').classList.remove('active');
      });
    });
  }

  var form = document.querySelectorAll('.form__contact');

  if (form) {
    form.forEach(function (item) {
      item.addEventListener('submit', function (e) {
        e.preventDefault();
      });
    });
  }

  var cookies = document.querySelectorAll('.cookies');
  var cookiesDis = document.querySelector('.js-cookies-disagree');
  var cookiesErrorClose = document.querySelector('.js-error-close');
  var cookiesClose = document.querySelector('.js-cookies-close');

  if (cookies && cookiesDis && cookiesErrorClose && cookiesClose) {
    setTimeout(function () {
      var cookies = document.querySelectorAll('.cookies');
      cookies.forEach(function (item) {
        item.classList.add('active');
      });
    }, 5000);
    cookiesDis.addEventListener('click', function () {
      document.querySelector('.cookies__error').classList.add('active');
    });
    cookiesErrorClose.addEventListener('click', function () {
      document.querySelector('.cookies__error').classList.remove('active');
    });
    cookiesClose.addEventListener('click', function () {
      document.querySelector('.cookies').classList.remove('active');
    });
  } // const tabsLink = document.querySelectorAll('.tabs__button');
  // if (tabsLink.length) {
  // 	tabsLink.forEach((item) => {
  // 		item.addEventListener('click', (e) => {
  // 			e.preventDefault;
  // 		})
  // 	})
  // }


  var tabs = document.querySelectorAll('.tabs__button');
  var tabsWrap = document.querySelectorAll('.news__inside-type');

  if (tabs) {
    document.addEventListener('click', function (e) {
      if (e.target.classList.contains('tabs__button')) {
        e.preventDefault();
        tabs.forEach(function (item) {
          item.classList.remove('active');
        });
        tabsWrap.forEach(function (item) {
          item.classList.remove('active');
        });
        e.target.classList.add('active');
        var dataTab = e.target.getAttribute('href');
        document.querySelector("[data-tabs=\"".concat(dataTab, "\"]")).classList.add('active');
      }
    });
  }
});
(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

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
        var _Swiper;

        mainSlider = new Swiper('.js-slider-about', (_Swiper = {
          speed: 1200,
          spaceBetween: 0,
          slidesPerView: 2,
          loop: true
        }, _defineProperty(_Swiper, "spaceBetween", 30), _defineProperty(_Swiper, "navigation", {
          nextEl: '.news-nav__next',
          prevEl: '.news-nav__prev'
        }), _defineProperty(_Swiper, "autoplay", {
          delay: 2500
        }), _defineProperty(_Swiper, "breakpoints", {
          // when window width is >= 320px
          768: {
            slidesPerView: 3
          }
        }), _Swiper));
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

  document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.header')) {
      document.querySelectorAll('.header-contacts__search-button').forEach(function (search) {
        // Открытие поиска
        search.addEventListener('click', function () {
          try {
            this.nextElementSibling.classList.add('header-contacts__search-form_open');
          } catch (e) {
            console.log(e);
          }
        });
      }); // Закрытие поиска по клику вне

      document.addEventListener('click', function (e) {
        if (document.querySelector('.header-contacts__search-form_open') && !e.target.closest('.header-contacts__search')) {
          document.querySelector('.header-contacts__search-form_open').classList.remove('header-contacts__search-form_open');
        }
      }); // Меню

      document.querySelectorAll('.js-header-menu__item').forEach(function (item) {
        item.addEventListener('mouseover', function () {
          console.log(this);
          this.classList.add('open');
          clearTimeout(this.timeout);
        });
        item.addEventListener('mouseout', function () {
          var _this = this;

          this.timeout = setTimeout(function () {
            return _this.classList.remove('open');
          }, 200);
        });
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.menu')) {
      // Назначение высоты листа
      var setListHeight = function setListHeight(list) {
        var height = 0;
        list.querySelectorAll('.menu__subitem').forEach(function (item) {
          return height += item.offsetHeight + 10;
        });
        list.dataset.height = height;
      };

      // Открытие бургер-меню
      try {
        var menu = document.querySelector('.menu');
        document.querySelectorAll('.header-burger').forEach(function (burger) {
          burger.addEventListener('click', function () {
            menu.classList.add('menu_open');
          });
        });
        document.querySelector('.menu-close').addEventListener('click', function () {
          menu.classList.remove('menu_open');
        });
      } catch (e) {
        console.log(e);
      } // Назначние задержки появления пунктов в меню


      var delay = 1.2;
      document.querySelectorAll('.menu__item.js-menu__item').forEach(function (item) {
        delay += 0.15;
        item.style.transitionDelay = "".concat(delay, "s");
      });
      document.querySelectorAll('.menu__sublist').forEach(function (list) {
        setListHeight(list);
      }); // Ресайз

      var timeout;
      window.addEventListener('resize', function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          document.querySelectorAll('.menu__sublist').forEach(function (list) {
            setListHeight(list);
          });
        }, 50);
      });
      document.querySelectorAll('.js-menu__link').forEach(function (item) {
        try {
          var parentElem = item.parentElement;

          if (parentElem.querySelector('ul')) {
            item.insertAdjacentHTML('beforeend', '<div class="menu__arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></div>');
            item.querySelector('.menu__arrow').addEventListener('click', function (e) {
              e.preventDefault();
              this.closest('ul').querySelectorAll('.open').forEach(function (item) {
                item.classList.remove('open');
                item.querySelector('ul').style.maxHeight = 0;
              });
              parentElem.classList.add('open');
              var list = parentElem.querySelector('.menu__sublist');
              list.style.maxHeight = "".concat(list.dataset.height, "px");
            });
          }
        } catch (e) {
          console.log(e);
        }
      }); // Закрытие пунктов меню при клике вне

      document.querySelector('.menu').addEventListener('click', function (e) {
        try {
          if (!e.target.closest('.menu__list')) {
            this.querySelectorAll('.open').forEach(function (item) {
              item.classList.remove('open');
              item.querySelector('ul').style.maxHeight = 0;
            });
          }
        } catch (e) {
          console.log(e);
        }
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.services, .guide__popup')) {
      // Слайдер
      var servicesSlider = new Swiper('.services__slider', {
        speed: 800,
        spaceBetween: 0,
        slidesPerView: 1,
        simulateTouch: false,
        navigation: {
          nextEl: '.services-nav__next',
          prevEl: '.services-nav__prev',
          disabledClass: 'services-nav__arrow_disabled'
        }
      }); // Открытие попапов

      document.querySelectorAll('.js-services-item__title').forEach(function (title) {
        title.addEventListener('click', function () {
          try {
            var item = this.closest('.services-item');
            var index = Array.from(item.parentElement.children).indexOf(item);
            var popup = document.querySelectorAll('.services-popup')[index];
            var slider = document.querySelector('.main-page-slider');
            document.body.classList.add('no-scroll');
            slider.classList.add('swiper-no-swiping');
            popup.classList.add('services-popup_open');
            document.querySelector('.services-popup__overflow').classList.add('active');
            document.querySelector('.services-popup__img').classList.add('active');
          } catch (e) {
            console.log(e);
          }
        });
      }); // Закрытие попапа

      document.querySelectorAll('.js-services-popup__close').forEach(function (close) {
        close.addEventListener('click', function () {
          try {
            var item = this.closest('.services-popup');
            var slider = document.querySelector('.main-page-slider');
            document.body.classList.remove('no-scroll');
            slider.classList.remove('swiper-no-swiping');
            item.classList.remove('services-popup_open');
          } catch (e) {
            console.log(e);
          }
        });
      }); // Закрытие попапа при клике вне

      document.addEventListener('click', function (e) {
        if (document.querySelector('.services-popup_open') && !e.target.closest('.services-popup__content') && !e.target.classList.contains('js-services-item__title')) {
          document.querySelector('.js-services__wrapper').style.zIndex = 1;
          document.querySelector('.services-popup_open').classList.remove('services-popup_open');
          document.querySelector('.main-page-slider').classList.remove('swiper-no-swiping');
        }
      });
    }

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
    var formInput = document.querySelectorAll('.form__input');

    if (formInput) {
      formInput.forEach(function (item) {
        item.addEventListener('focus', function (e) {
          var label = e.currentTarget.closest('.form__item').querySelector('.form__label');
          label.classList.add('active');
        });
        item.addEventListener('blur', function (e) {
          if (!e.currentTarget.value) {
            var label = e.currentTarget.closest('.form__item').querySelector('.form__label');
            label.classList.remove('active');
          }
        });
      });
    } // Кастом скролл в попапе


    document.querySelectorAll('.services-popup__text').forEach(function (item) {
      new PerfectScrollbar(item, {
        wheelSpeed: 0.8,
        wheelPropagation: true
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.news')) {
      var _Swiper;

      // Слайдер
      var newsSlider = new Swiper('.news__slider', (_Swiper = {
        speed: 1000,
        loop: true,
        loopAdditionalSlides: 2,
        spaceBetween: 10,
        slidesPerView: 1,
        slideToClickedSlide: true,
        slideActiveClass: 'news-item_active'
      }, _defineProperty(_Swiper, "slideToClickedSlide", true), _defineProperty(_Swiper, "navigation", {
        nextEl: '.news-nav__next',
        prevEl: '.news-nav__prev',
        disabledClass: 'news-nav__arrow_disabled'
      }), _defineProperty(_Swiper, "breakpoints", {
        0: {
          speed: 600
        },
        768: {
          speed: 1000,
          autoHeight: true
        }
      }), _Swiper));
    }

    var galleryThumbs = new Swiper('.slider__gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    });
    var galleryTop = new Swiper('.js-slider__gallery-top', {
      spaceBetween: 10,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
    var galleryTopSer = new Swiper('.js-slider__servise', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
    var newsButton = document.querySelectorAll('.js-open-popup');

    if (newsButton) {
      newsButton.forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector('.news__popup').classList.add('active');
          galleryTop.update();
          galleryThumbs.update();
        });
      });
    }

    var closePopup = document.querySelectorAll('.js-close-popup');

    if (closePopup) {
      closePopup.forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.currentTarget.closest('.news__popup').classList.remove('active');
        });
      });
    }

    var reviewsClose = document.querySelectorAll('.js-reviews__close');

    if (reviewsClose) {
      reviewsClose.forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          e.currentTarget.closest('.reviews__popup').classList.remove('active');
        });
      });
    }

    var reviewsSlider = document.querySelectorAll('.slider__reviews');

    if (reviewsSlider) {
      var reviewsSliders = new Swiper('.slider__reviews', {
        speed: 800,
        slidesPerView: 1,
        navigation: {
          nextEl: '.slider__arrow-reviews--left',
          prevEl: '.slider__arrow-reviews--right'
        }
      });
    }

    var openReviews = document.querySelectorAll('.js-open-reviews');

    if (openReviews.length) {
      openReviews.forEach(function (item) {
        item.addEventListener('click', function (e) {
          document.querySelector('.reviews__popup').classList.add('active');
          reviewsSliders.update();
        });
      });
    }

    var openSheme = document.querySelectorAll('.js-open-scheme');

    if (openSheme.length) {
      openSheme.forEach(function (item) {
        item.addEventListener('click', function (e) {
          document.querySelector('.scheme__popup').classList.add('active');
        });
      });
    }

    var closePopupScheme = document.querySelectorAll('.js-close-scheme');

    if (closePopupScheme) {
      closePopupScheme.forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.currentTarget.closest('.scheme__popup').classList.remove('active');
        });
      });
    }

    var eqItem = document.querySelectorAll('.equipment__item');
    eqItem.forEach(function (item, index) {
      item.style.zIndex = "".concat(index);
    });
    var mainBanner = document.querySelectorAll('.main-banner');

    if (mainBanner) {
      mainBanner.forEach(function (item) {
        item.classList.add('loaded');
      });
    }

    var boxButton = document.getElementsByTagName('data-fslightbox');
    console.log(boxButton);

    if (boxButton.length) {
      fsLightboxInstances['gallery'].props.onOpen = function () {
        return console.log('Lightbox open!');
      };
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    var openPopup = document.querySelectorAll('.js-open-form');

    if (openPopup) {
      openPopup.forEach(function (item) {
        var popupTitle = document.querySelectorAll('.form__contact-title');
        item.addEventListener('click', function (e) {
          var dataTitle = e.target.getAttribute('data-title');
          popupTitle.forEach(function (item) {
            item.innerHTML = dataTitle;
          });
          document.querySelector('.form__popup').classList.add('active');
          document.querySelector('.form__popup').classList.add('menu_open');
        });
      });
      document.querySelectorAll('.js-popup__close').forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.target.closest('.form__popup').classList.remove('active');
          e.target.closest('.form__popup').classList.remove('menu_open');
        });
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    var phoneInput = document.querySelector('.js-phone-mask');
    var emailInput = document.querySelector('.js-email-mask');
    var maskOptions = {
      mask: '+{7}(000)000-00-00'
    };
    var maskOptionsEmail = {
      mask: /^\S*@?\S*$/
    };
    IMask(phoneInput, maskOptions);
    IMask(emailInput, maskOptionsEmail);
    var form = document.querySelectorAll('.form__contact');

    if (form) {
      form.forEach(function (item) {
        item.addEventListener('submit', function (event) {
          event.preventDefault();
          var formInput = event.target;
          var email = formInput.querySelector('.js-email-mask');
          var name = formInput.querySelector('.js-name-input');
          var emailValue = email.value;
          var nameValue = name.value;
          var fields = [{
            element: email,
            value: emailValue
          }, {
            element: name,
            value: nameValue
          }];
          fields.forEach(function (field) {
            if (field.value.length > 0) {
              if (field.element.closest('.form__item').classList.contains('is-invalid')) {
                field.element.closest('.form__item').classList.remove('is-invalid');
              }
            } else {
              field.element.closest('.form__item').classList.add('is-invalid');
            }
          });

          var invaslidFields = _toConsumableArray(formInput.querySelectorAll('.is-invalid'));

          if (invaslidFields.length === 0) ;
        });
      });
    }

    var fileInput = document.querySelectorAll('.form__download-input');

    if (fileInput) {
      fileInput.forEach(function (item) {
        item.addEventListener('change', function (e) {
          if (e.target.value) {
            var fileName = e.target.value;
            e.target.closest('.form__download').querySelector('.form__download-custom').innerHTML = "".concat(fileName);
            e.target.closest('.form__download').querySelector('.btn--reset').classList.add('active');
          } else {
            e.target.closest('.form__download').querySelector('.form__download-custom').innerHTML = "\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u0435 \u0444\u0430\u0439\u043B";
            e.target.closest('.form__download').querySelector('.btn--reset').classList.remove('active');
          }
        });
      });
      document.querySelectorAll('.js-reset-file').forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          e.currentTarget.classList.remove('active');
          e.target.closest('.form__download').querySelector('.form__download-custom').innerHTML = "\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u0435 \u0444\u0430\u0439\u043B";
          e.target.closest('.form__download').querySelector('.form__download-input').value = '';
        });
      });
    }
  });

  // import './_libs'

}));

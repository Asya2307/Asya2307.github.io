document.addEventListener('DOMContentLoaded', function (e) {
	if (document.querySelector('.main-page-slider')) {
		// Назначение нужного события прокрутки колесиком
		if ('onwheel' in document) {
			window.addEventListener("wheel", swiperWheel);
		} else if ('onmousewheel' in document) {
			window.addEventListener("mousewheel", swiperWheel);
		} else {
			window.addEventListener("MozMousePixelScroll", swiperWheel);
		}

		let mainSlider;

		const sliderAboutItem = document.querySelector('.js-slider-about');

		if (sliderAboutItem) {
			mainSlider = new Swiper('.js-slider-about', {
				speed: 1200,
				spaceBetween: 0,
				slidesPerView: 2,
				loop: true,
				spaceBetween: 30,
				navigation: {
					nextEl: '.news-nav__next',
					prevEl: '.news-nav__prev'
				},
				autoplay: {
					delay: 2500,
				 },
				breakpoints: {
					// when window width is >= 320px
					768: {
					  slidesPerView: 3,
					},
				  }
			});
		}

		if (window.innerWidth > 991) {
			// Главный слайдер для переключения секций
			mainSlider = new Swiper('.main-page-slider', {
				speed: 600,
				spaceBetween: 0,
				slidesPerView: 'auto',
				direction: 'vertical',
				simulateTouch: false
			});

			// Показ фиксированного хедера
			mainSlider.on('slideChangeTransitionStart', function () {
				if (mainSlider.activeIndex > 0) {
					document.querySelector('.header-fixed').classList.add('header-fixed_visible')
				} else {
					document.querySelector('.header-fixed').classList.remove('header-fixed_visible')
				}
			})
		}

		let timeout;
		window.addEventListener('resize', function () {
			clearTimeout(timeout)
			timeout = setTimeout(function () {
				if (window.innerWidth > 991 && !(mainSlider instanceof Swiper)) {
					mainSlider = new Swiper('.main-page-slider', {
						speed: 600,
						spaceBetween: 0,
						slidesPerView: 'auto',
						direction: 'vertical',
						simulateTouch: false
					});

					// Показ фиксированного хедера
					mainSlider.on('slideChangeTransitionStart', function () {
						if (mainSlider.activeIndex > 0) {
							document.querySelector('.header-fixed').classList.add('header-fixed_visible')
						} else {
							document.querySelector('.header-fixed').classList.remove('header-fixed_visible')
						}
					})
				} else if (window.innerWidth < 992 && mainSlider instanceof Swiper) {
					mainSlider.destroy()
					mainSlider = false
				}
			}, 50)
		})

		function swiperWheel(e) {
			if (window.innerWidth > 991) {
				// Переключение секций в элементах без скролла
				if (document.querySelector('.main-page-slider.swiper-no-swiping')) {
					return
				} else if (!e.target.closest('.scrollable')) {
					if (e.deltaY > 0 || e.wheelDelta < 0) {
						if (!mainSlider.animating) {
							mainSlider.slideNext()
						}
					} else {
						if (!mainSlider.animating) {
							mainSlider.slidePrev()
						}
					}
				} else {
					// Переключение секций в элементах со скроллом
					const elem = e.target.closest('.scrollable')
					const slider = document.querySelector('.main-page-slider')

					if (!slider.classList.contains('swiper-no-swiping')) {
						if (elem.scrollHeight - elem.scrollTop === elem.clientHeight && (e.deltaY > 0 || e.wheelDelta < 0)) {
							if (!mainSlider.animating) {
								mainSlider.slideNext()
							}
						} else if (elem.scrollTop == 0 && (e.deltaY < 0 || e.wheelDelta > 0)) {
							if (!mainSlider.animating) {
								mainSlider.slidePrev()
							}
						}
					}
				}
			}
		}

		window.addEventListener('scroll', function () {
			if (window.pageYOffset > window.innerHeight) {
				document.querySelector('.header-fixed').classList.add('header-fixed_visible')
			} else {
				document.querySelector('.header-fixed').classList.remove('header-fixed_visible')
			}
		})


	}

	const openGuide = document.querySelectorAll('.js-guide-open');
	if (openGuide.length) {
		openGuide.forEach(function (item) {
			item.addEventListener('click', function (e) {
				document.querySelector('.guide__popup').classList.add('active');
			});
		});
	}

	const closeGuide = document.querySelectorAll('.js-close-guide');

	if (closeGuide.length) {
		closeGuide.forEach(function (item) {
			item.addEventListener('click', function (e) {
				e.currentTarget.closest('.guide__popup').classList.remove('active');
			});
		});
	}

	const form = document.querySelectorAll('.form__contact');
	if (form) {
		form.forEach(function (item) {
			item.addEventListener('submit', function (e) {
				e.preventDefault()
			})
		})
	}

	const cookies = document.querySelectorAll('.cookies')
	const cookiesDis = document.querySelector('.js-cookies-disagree');
	const cookiesErrorClose = document.querySelector('.js-error-close');
	const cookiesClose = document.querySelector('.js-cookies-close');

	if (cookies && cookiesDis && cookiesErrorClose && cookiesClose) {
		setTimeout(function () {
			const cookies = document.querySelectorAll('.cookies')
			cookies.forEach((item) => {
				item.classList.add('active')
			})
		}, 5000);

		cookiesDis.addEventListener('click', () => {
			document.querySelector('.cookies__error').classList.add('active')
		});

		cookiesErrorClose.addEventListener('click', () => {
			document.querySelector('.cookies__error').classList.remove('active');
		})

		cookiesClose.addEventListener('click', () => {
			document.querySelector('.cookies').classList.remove('active');
		})
	}

	// const tabsLink = document.querySelectorAll('.tabs__button');
	// if (tabsLink.length) {
	// 	tabsLink.forEach((item) => {
	// 		item.addEventListener('click', (e) => {
	// 			e.preventDefault;

	// 		})
	// 	})
	// }

	const tabs = document.querySelectorAll('.tabs__button');
	const tabsWrap = document.querySelectorAll('.news__inside-type');

	if (tabs) {
		document.addEventListener('click', (e) => {
			if (e.target.classList.contains('tabs__button')) {
				e.preventDefault();
				tabs.forEach((item) => {
					item.classList.remove('active');
				});
				tabsWrap.forEach((item) => {
					item.classList.remove('active');
				})
				e.target.classList.add('active');
				const dataTab = e.target.getAttribute('href');
				document.querySelector(`[data-tabs="${dataTab}"]`).classList.add('active');
			}
		})
	}
});

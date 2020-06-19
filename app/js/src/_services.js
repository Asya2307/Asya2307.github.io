document.addEventListener('DOMContentLoaded', function () {
	if (document.querySelector('.services, .guide__popup')) {
		// Слайдер
		const servicesSlider = new Swiper('.services__slider', {
			speed: 800,
			spaceBetween: 0,
			slidesPerView: 1,
			simulateTouch: false,
			navigation: {
				nextEl: '.services-nav__next',
				prevEl: '.services-nav__prev',
				disabledClass: 'services-nav__arrow_disabled'
			},
		});

		// Открытие попапов
		document.querySelectorAll('.js-services-item__title').forEach(title => {
			title.addEventListener('click', function () {
				try {
					const item = this.closest('.services-item')
					const index = Array.from(item.parentElement.children).indexOf(item)
					const popup = document.querySelectorAll('.services-popup')[index]
					const slider = document.querySelector('.main-page-slider')

					document.body.classList.add('no-scroll')
					slider.classList.add('swiper-no-swiping')
					popup.classList.add('services-popup_open')

					document.querySelector('.services-popup__overflow').classList.add('active');
					document.querySelector('.services-popup__img').classList.add('active');

				} catch (e) {
					console.log(e)
				}
			})
		})

		// Закрытие попапа
		document.querySelectorAll('.js-services-popup__close').forEach(close => {
			close.addEventListener('click', function () {
				try {
					const item = this.closest('.services-popup')
					const slider = document.querySelector('.main-page-slider')

					document.body.classList.remove('no-scroll')
					slider.classList.remove('swiper-no-swiping')
					item.classList.remove('services-popup_open')
				} catch (e) {
					console.log(e)
				}
			})
		})

		// Закрытие попапа при клике вне
		document.addEventListener('click', function (e) {
			if (document.querySelector('.services-popup_open') && !e.target.closest('.services-popup__content') && !e.target.classList.contains('js-services-item__title')) {
				document.querySelector('.js-services__wrapper').style.zIndex = 1;
				document.querySelector('.services-popup_open').classList.remove('services-popup_open')
				document.querySelector('.main-page-slider').classList.remove('swiper-no-swiping')
			}
		})
	}

	function resizeWatcher() {
		const tableSel = document.querySelectorAll('table');
		const scrollArray = [];
		if (tableSel.length) {
			tableSel.forEach((item, i) => {
				const orgHtml = item.outerHTML;

				item.outerHTML = `<div class='table-scroller${i}'>${orgHtml}</div>`;
				const ps = new PerfectScrollbar(`.table-scroller${i}`, {
					wheelPropagation: true,
				});

				scrollArray.push(ps);
			});

			window.addEventListener('resize', () => {
				if (scrollArray.length) {
					scrollArray.forEach((item) => {
						item.update();
					});
				}
			});
		}
	}

	resizeWatcher()

	const formInput = document.querySelectorAll('.form__input');
	if (formInput) {
		formInput.forEach(function (item) {
			item.addEventListener('focus', function (e) {
				const label = e.currentTarget.closest('.form__item').querySelector('.form__label');
				label.classList.add('active')
			})

			item.addEventListener('blur', function (e) {
				if (!e.currentTarget.value) {
					const label = e.currentTarget.closest('.form__item').querySelector('.form__label');
					label.classList.remove('active')
				}
			})
		})
	}

	// Кастом скролл в попапе
	document.querySelectorAll('.services-popup__text').forEach(item => {
		new PerfectScrollbar(item, {
			wheelSpeed: 0.8,
			wheelPropagation: true
		})
	})



})
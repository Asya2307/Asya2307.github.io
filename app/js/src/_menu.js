document.addEventListener('DOMContentLoaded', function () {
	if (document.querySelector('.menu')) {
		// Открытие бургер-меню
		try {
			const menu = document.querySelector('.menu')

			document.querySelectorAll('.header-burger').forEach(burger => {
				burger.addEventListener('click', function () {
					menu.classList.add('menu_open')
				})
			})

			document.querySelector('.menu-close').addEventListener('click', function () {
				menu.classList.remove('menu_open')
			})
		} catch (e) {
			console.log(e)
		}

		// Назначние задержки появления пунктов в меню
		let delay = 1.2;
		document.querySelectorAll('.menu__item.js-menu__item').forEach(item => {
			delay += 0.15;
			item.style.transitionDelay = `${delay}s`
		})

		// Назначение высоты листа
		function setListHeight(list) {
			let height = 0;
			list.querySelectorAll('.menu__subitem').forEach(item => height += item.offsetHeight + 10);
			list.dataset.height = height;
		}

		document.querySelectorAll('.menu__sublist').forEach(list => {
			setListHeight(list)
		})

		// Ресайз
		let timeout;
		window.addEventListener('resize', function () {
			clearTimeout(timeout)
			timeout = setTimeout(function () {
				document.querySelectorAll('.menu__sublist').forEach(list => {
					setListHeight(list)
				})
			}, 50)
		})

		document.querySelectorAll('.js-menu__link').forEach(item => {
			try {
				const parentElem = item.parentElement;
				if (parentElem.querySelector('ul')) {
					item.insertAdjacentHTML('beforeend', '<div class="menu__arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></div>')
					item.querySelector('.menu__arrow').addEventListener('click', function(e) {
						e.preventDefault()
						this.closest('ul').querySelectorAll('.open').forEach(item => {
							item.classList.remove('open')
							item.querySelector('ul').style.maxHeight = 0;
						})

						parentElem.classList.add('open')

						const list = parentElem.querySelector('.menu__sublist');
						list.style.maxHeight = `${list.dataset.height}px`;
					})
				}
			} catch (e) {
				console.log(e)
			}
		})

		// Закрытие пунктов меню при клике вне
		document.querySelector('.menu').addEventListener('click', function (e) {
			try {
				if (!e.target.closest('.menu__list')) {
					this.querySelectorAll('.open').forEach(item => {
						item.classList.remove('open')
						item.querySelector('ul').style.maxHeight = 0;
					})
				}
			} catch (e) {
				console.log(e)
			}
		})
	}
})


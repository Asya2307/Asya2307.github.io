document.addEventListener('DOMContentLoaded', function () {
	if (document.querySelector('.header')) {
		document.querySelectorAll('.header-contacts__search-button').forEach(search => {
			// Открытие поиска
			search.addEventListener('click', function () {
				try {
					this.nextElementSibling.classList.add('header-contacts__search-form_open')
				} catch (e) {
					console.log(e)
				}
			})
		})

		// Закрытие поиска по клику вне
		document.addEventListener('click', function (e) {
			if (document.querySelector('.header-contacts__search-form_open') && !e.target.closest('.header-contacts__search')) {
				document.querySelector('.header-contacts__search-form_open').classList.remove('header-contacts__search-form_open');
			}
		})

		// Меню
		document.querySelectorAll('.js-header-menu__item').forEach(item => {
			item.addEventListener('mouseover', function() {
				console.log(this)
				this.classList.add('open')
				clearTimeout(this.timeout)
			})

			item.addEventListener('mouseout', function() {
				this.timeout = setTimeout(() => this.classList.remove('open'), 200)
			})
		})
	}
})
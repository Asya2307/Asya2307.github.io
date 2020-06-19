document.addEventListener('DOMContentLoaded', function () {
	if (document.querySelector('.news')) {
		// Слайдер
		const newsSlider = new Swiper('.news__slider', {
			speed: 1000,
			loop: true,
			loopAdditionalSlides: 2,
			spaceBetween: 10,
			slidesPerView: 1,
			slideToClickedSlide: true,
			slideActiveClass: 'news-item_active',
			slideToClickedSlide: true,
			navigation: {
				nextEl: '.news-nav__next',
				prevEl: '.news-nav__prev',
				disabledClass: 'news-nav__arrow_disabled'
			},
			breakpoints: {
				0: {
					speed: 600,
				},
				768: {
					speed: 1000,
					autoHeight: true
				}
			},
		});
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
	    },
	  });
	  
	  var newsButton = document.querySelectorAll('.js-open-popup');

	  if (newsButton) {
	    newsButton.forEach(function (item) {
	      item.addEventListener('click', function (e) {
			e.preventDefault();
			document.querySelector('.news__popup').classList.add('active');
			galleryTop.update()
			galleryThumbs.update()
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
				prevEl: '.slider__arrow-reviews--right',
			},
		});
	}

	var openReviews = document.querySelectorAll('.js-open-reviews');

	if (openReviews.length) {
		openReviews.forEach(function (item) {
			item.addEventListener('click', function (e) {
				document.querySelector('.reviews__popup').classList.add('active');
				reviewsSliders.update()
			});
		});
	}

	var openSheme = document.querySelectorAll('.js-open-scheme')

	if(openSheme.length) {
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

	const eqItem =  document.querySelectorAll('.equipment__item');
	eqItem.forEach(function(item, index){
		item.style.zIndex = `${index}`
	}) 

	const mainBanner = document.querySelectorAll('.main-banner');

	if (mainBanner) {
		mainBanner.forEach((item) => {
			item.classList.add('loaded')
		})
	}

	const boxButton = document.getElementsByTagName('data-fslightbox'); 
	console.log(boxButton)
	if (boxButton.length) {
		fsLightboxInstances['gallery'].props.onOpen = () => console.log('Lightbox open!');
	}


})
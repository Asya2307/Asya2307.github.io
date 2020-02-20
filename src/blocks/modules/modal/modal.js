$(window).on('load', function() {
    const telMask = $('.js-input-tel');
    if (telMask) {
        $('.js-input-tel').mask('+7 (000) 000-0000');
    }

    const modalClose = $('.js-modal-close');

    if (modalClose) {
        modalClose.on('click', function() {
            $(this).closest('.modal__wrap').removeClass('active')
        })
    } 

    const modalOpen = $('.js-modal-open');
    console.log(typeof modalOpen)
    if (modalOpen) {
        console.log(1)
        modalOpen.on('click', function() {
            $('.modal__wrap').addClass('active')
        })
    } 

   
})
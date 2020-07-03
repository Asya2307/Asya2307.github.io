(function(){

    var swiper = new Swiper('.js-before-after-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });


    let beforeAfterElements = document.querySelectorAll(".js-before-after-container");

    window.addEventListener("load", function(){

        if(beforeAfterElements){
            calculateBeforeAfter();
            window.addEventListener("resize", updateBeforeAfter);
        };
    })

    function updateBeforeAfter(){
        calculateBeforeAfter("recalc");
    };

    function calculateBeforeAfter(recalcCheck){
        for(let i = 0; i < beforeAfterElements.length; i++){
            let overlay = beforeAfterElements[i].querySelector(".js-before-after-overlay");
            if(overlay){
                beforeAfterElements[i].overlay = overlay;

                beforeAfterElements[i].offset = beforeAfterElements[i].getBoundingClientRect().left - 8;

                beforeAfterElements[i].width = beforeAfterElements[i].getBoundingClientRect().right - beforeAfterElements[i].getBoundingClientRect().left;

                beforeAfterElements[i].height = (window.pageYOffset + beforeAfterElements[i].getBoundingClientRect().bottom) - (window.pageYOffset + beforeAfterElements[i].getBoundingClientRect().top);

                beforeAfterElements[i].step = Math.round(beforeAfterElements[i].width / 100);

                beforeAfterElements[i].skewCompensation = beforeAfterElements[i].height / 20;
                if(!recalcCheck){
                    beforeAfterElements[i].addEventListener("mouseenter", addMouseMoveListener);
                    beforeAfterElements[i].addEventListener("mouseleave", resetOverlayWidth);
                };
            };
        };
    };

    function resetOverlayWidth(){
        clearInterval(widthChange);
        this.overlay.removeAttribute("style");
        this.removeEventListener("mousemove", calcOverlayWidth);
        currentWidth = 0;
        neededWidth = 0;
    };

    let currentWidth = 0;
    let neededWidth = 0;
    let widthChange;

    function addMouseMoveListener(){
        if(document.documentElement.clientWidth > 1283){
            let overlay = this.overlay;
            overlay.style.transition = "none";
            widthChange = setInterval(function(){
                if(currentWidth < neededWidth){
                    currentWidth = currentWidth + 1;
                    overlay.style.width = currentWidth + "%";
                }else if(currentWidth > neededWidth){
                    currentWidth = currentWidth - 1;
                    overlay.style.width = currentWidth + "%";
                };
            }, 5)
            this.addEventListener("mousemove", calcOverlayWidth);
        };
    };

    function calcOverlayWidth(){
        neededWidth = Math.round((event.clientX - this.offset) / this.step + this.skewCompensation);
    };

})();
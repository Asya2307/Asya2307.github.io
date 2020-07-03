(function(){

    const pageHeader = document.querySelector("header");
    if(pageHeader){
        window.addEventListener("scroll", stickHeader);
        window.addEventListener("load", stickHeader);
        window.addEventListener("resize", checkStick);
    };

    const startStickPoint = 700;
    const minStickWidth = 1300;

    function stickHeader(){

        if(document.documentElement.clientWidth < minStickWidth){
            return false;
        };

        if(window.pageYOffset > startStickPoint){
            if(!pageHeader.classList.contains("head--sticky")){
                pageHeader.classList.add("head--sticky");
            };
        }else if(window.pageYOffset < startStickPoint){
            if(pageHeader.classList.contains("head--sticky")){
                pageHeader.classList.remove("head--sticky");
            };
        };
    };

    function checkStick(){
        if(document.documentElement.clientWidth < minStickWidth){
            if(pageHeader.classList.contains("head--sticky")){
                pageHeader.classList.remove("head--sticky");
            };
            if(window.pageYOffset > 0){
                if(document.body.classList.contains("js-burger-menu-is-open")){
                    document.body.classList.remove("js-burger-menu-is-open");
                };

                const burgerButton = document.querySelector(".burger");

                if(burgerButton && burgerButton.classList.contains("js-burger-is-open")){
                    burgerButton.classList.remove("js-burger-is-open");
                };
            };
        }else if(document.documentElement.clientWidth > minStickWidth && window.pageYOffset > startStickPoint){
            if(!pageHeader.classList.contains("head--sticky")){
                pageHeader.classList.add("head--sticky");
            };
        };
    };


})();


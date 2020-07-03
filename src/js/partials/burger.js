(function(){

    const burgerButton = document.querySelector(".burger");
    if(burgerButton){
        burgerButton.addEventListener("click", changeMenuState);
    };

    function changeMenuState(){
        document.body.classList.toggle("js-burger-menu-is-open");

        if(!burgerButton.classList.contains("js-burger-is-open")){
            burgerButton.classList.add("js-burger-is-open");
        }else if(burgerButton.classList.contains("js-burger-is-open")){
            burgerButton.classList.remove("js-burger-is-open");
        };
    };
    
})();
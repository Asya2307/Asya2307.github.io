(function(){

    window.addEventListener("load", closeIntro);

    function closeIntro(){
        if(document.body.classList.contains("js-intro-is-shown")){
            document.body.classList.remove("js-intro-is-shown");
        };
    };

})();
(function(){

    /*let branches = [
        {
            value: "branch-01",
            coordinates: [55.154820, 61.394523]
        },
        {
            value: "branch-02",
            coordinates: [55.173355, 61.306164]
        },
        {
            value: "branch-03",
            coordinates: [55.195015, 61.334515]  
        },
        {
            value: "branch-04",
            coordinates: [55.160545, 61.378281]
        }
    ];*/

    document.addEventListener('DOMContentLoaded', function() {
        let choicesBlack = document.querySelectorAll("[data-choices-black]");
        for (i = 0; i < choicesBlack.length; ++i) {
            let choicesItem = choicesBlack[i];
            new Choices(choicesItem, {
                silent: false,
                searchEnabled: false,
                resetScrollPosition: true,
                classNames: {
                    containerOuter: "choices choices--black",
                    containerInner: "choices__inner choices__inner--black",
                    item: "choices__item choices__item--black",
                },
            });
        };

        let choicesWhite = document.querySelectorAll("[data-choices-white]");
        for (i = 0; i < choicesWhite.length; ++i) {
            let choicesItem = choicesWhite[i];
            new Choices(choicesItem, {
                silent: false,
                searchEnabled: false,
                resetScrollPosition: true,
                classNames: {
                    containerOuter: "choices choices--white",
                    containerInner: "choices__inner choices__inner--white",
                    item: "choices__item choices__item--white",
                },
            });
        };
    });

})();




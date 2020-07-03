// Инициализация карты Яндекс
if(document.getElementById("map")){
    ymaps.ready(init);
    function init(){ 
        let locationMap = new ymaps.Map("map", {
            center: [55.176234, 61.364842],
            zoom: 13
        }),
    
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
        
        branchPlacemark01 = new ymaps.Placemark([55.154820, 61.394523], {
            hintContent:"",
            balloonContent:""
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../images/pin.png',
            iconImageSize: [52, 52],
            iconImageOffset: [0, 0]
        });

        branchPlacemark02 = new ymaps.Placemark([55.195015, 61.334515], {
            hintContent:"",
            balloonContent:""
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../images/pin.png',
            iconImageSize: [52, 52],
            iconImageOffset: [0, 0]
        });

        branchPlacemark03 = new ymaps.Placemark([55.160545, 61.378281], {
            hintContent:"",
            balloonContent:""
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../images/pin.png',
            iconImageSize: [52, 52],
            iconImageOffset: [0, 0]
        });

        branchPlacemark04 = new ymaps.Placemark([55.173355, 61.306164], {
            hintContent:"",
            balloonContent:""
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../images/pin.png',
            iconImageSize: [52, 52],
            iconImageOffset: [0, 0]
        });
    
        locationMap.geoObjects
            .add(branchPlacemark01)
            .add(branchPlacemark02)
            .add(branchPlacemark03)
            .add(branchPlacemark04)
    
        locationMap.behaviors.disable("scrollZoom");
        locationMap.controls.remove("searchControl");
        locationMap.controls.remove("rulerControl");
        locationMap.controls.remove("typeSelector");
        locationMap.controls.remove("trafficControl");
        locationMap.controls.remove("geolocationControl");
        locationMap.controls.remove("fullscreenControl");
        locationMap.controls.remove("routeButtonControl");
    };    
};
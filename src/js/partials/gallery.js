const gallery = document.querySelectorAll('.js-gallery');

if (gallery) {
    gallery.forEach( (item)=> {
        lightGallery(item); 

        const itemGallery = item.querySelectorAll('.gallery__item');

        const youTubeLink = 'youtube';
        const mapLink = 'google.com/maps';

        const isVideo = (href) => href.includes(youTubeLink);
        const isMap = (href) => href.includes(mapLink);
    

        itemGallery.forEach((item) => {
            const href = item.getAttribute('href');
            if (isVideo(href)) {
                item.classList.add('gallery__item--video');
            };

            if (isMap(href)) {
                item.classList.add('gallery__item--map');
            };
        })
    })
}

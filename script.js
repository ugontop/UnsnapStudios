// Simple News Carousel Scroll Functionality
document.querySelector('.news-carousel').scrollLeft = 0;

setInterval(() => {
    const carousel = document.querySelector('.news-carousel');
    carousel.scrollLeft += 1;
    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0;
    }
}, 30);

const cafeCarousel = document.querySelector('#cafeCarousel');

if (cafeCarousel) {
    const carousel = new bootstrap.Carousel(cafeCarousel, {
        interval: 4000,
        ride: 'carousel',
        pause: 'hover',
        touch: true
    });
}
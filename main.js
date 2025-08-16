document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('show');
});

const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextE1: '.swiper-button-next',
        prevE1: '.swiper-button-prev'
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    speed: 2000

});
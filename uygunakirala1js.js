var swiper = new Swiper(".mySwiper", {
    slidesPerView: 10,
    spaceBetween: 0,
    centeredSlides: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
if (window.innerWidth<800){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 7,
        spaceBetween: 0,
        centeredSlides: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
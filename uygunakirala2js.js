var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 20,
    centeredSlides: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
if (window.innerWidth<800){
    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 2.67,
        spaceBetween: 0,
        centeredSlides: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
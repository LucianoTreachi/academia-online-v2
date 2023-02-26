////////// BRANDS SWIPER ////////// 
const brands = new Swiper(".swiper", {

  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    455: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 3,
    },
    1225: {
      slidesPerView: 4,
    },
  },
});
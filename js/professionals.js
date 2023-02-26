////////// PROFESSIONALS SWIPER ////////// 
const professionals = new Swiper(".swiper", {
    
  slidesPerView: 1,
  spaceBetween: 50,
  grabCursor: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
      // When touch 700px
      700: {
          slidesPerView: 2,
          spaceBetween: 50,
        },

      // When touch 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
});
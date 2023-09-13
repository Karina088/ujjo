const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 3.7,
    spaceBetween: 23,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
        520: {
          slidesPerView: 1.2,
        },
        700: {
          slidesPerView: 1.5,
        },
        
        1024: {
          slidesPerView: 2,
        },
        1360: {
          slidesPerView: 3,
        },
          1780: {
            slidesPerView: 3.7,
          }
      },

      mousewheel: {
        forceToAxis: true,
      },  
  
     // If we need pagination
     pagination: {
      el: '.swiper-pagination',
     },
  
     // Navigation arrows
     navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
     },
 });
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 3.7,
    spaceBetween: 23,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
        520: {
          slidesPerView: 1.1,
        },

        700: {
          slidesPerView: 1.6,
        },

        800: {
          slidesPerView: 1.8,
        },
        
        1024: {
          slidesPerView: 2.2,
        },

        1144: {
          slidesPerView: 2.5,
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
        // Navigation arrows
     navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
     },
  
     // If we need pagination
     pagination: {
      el: '.swiper-pagination',
      // fraction
      type: 'fraction',
      // castom fraction
      // renderFraction: function(currentClass, totalClass) {
      //   return `Фото <span class="`+ currentClass + '"></span>' +
      //   ' из ' + 
      //   ' <span class="' + totalClass + '"></span>';
      // },
     },
 });
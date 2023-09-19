const swiper = new Swiper('.swiper', {
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
          slidesPerView: 1.2,
        },

        700: {
          slidesPerView: 1.6,
          spaceBetween: 23,
        },

        800: {
          slidesPerView: 1.8,
        },
        
        1024: {
          slidesPerView: 2.2,
        },

        1144: {
          slidesPerView: 2.7,
        },
        1360: {
          slidesPerView: 3.2,
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
     },
 })

 // links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute('href').substring(1)).scrollIntoView({
          behavior: 'smooth'
      })
  })
})

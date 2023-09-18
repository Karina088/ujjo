const hamEl = document.querySelector('.hamburger')
 const mobileEl = document.querySelector('.mobile-menu')
 hamEl.addEventListener('click', () => {
hamEl.classList.toggle('ham-active')
mobileEl.classList.toggle('active-box')
 })

 const menuEl = document.querySelectorAll('.header__menu')

 window.addEventListener('resize', function () {
  // if (window.innerWidth <= 968) {
  //   hamEl.classList.add('ham-mobile')
  // } else {
  //   hamEl.classList.remove('ham-mobile')
  // }

  window.innerWidth <= 968 ?  hamEl.classList.add('ham-mobile') 
  : hamEl.classList.remove('ham-mobile')
})


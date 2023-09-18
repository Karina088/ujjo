const hamEl = document.querySelector('.hamburger')
 hamEl.addEventListener('click', () => {
hamEl.classList.toggle('ham-active')
 })

 const menuEl = document.querySelectorAll('.header__menu')
 window.addEventListener('resize', function () {
  // if (window.innerWidth <= 968) {
  //   hamEl.classList.add('ham-mobile')
  // } else {
  //   hamEl.classList.remove('ham-mobile')
  // }

  window.innerWidth <= 968 ?  hamEl.classList.add('ham-mobile'): hamEl.classList.remove('ham-mobile')
})
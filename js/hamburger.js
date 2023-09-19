const hamEl = document.querySelector('.hamburger')
const mobileEl = document.querySelector('.mobile-menu')

 hamEl.addEventListener('click', () => {
 hamEl.classList.toggle('ham-active')
 mobileEl.classList.toggle('active-box')
 })

const menuEl = document.querySelectorAll('.header__menu')

 window.addEventListener('resize', function () {
 window.innerWidth <= 968 ?  
  hamEl.classList.add('ham-mobile') : hamEl.classList.remove('ham-mobile')
})

document.querySelectorAll('.header__menu-link').forEach((el) => el.addEventListener('click', () => {
  setTimeout(() => {
    mobileEl.classList.remove('active-box')
    hamEl.classList.remove('ham-active')
  }, 1000)
 })
 )


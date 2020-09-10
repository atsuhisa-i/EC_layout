var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  grabCursor: true,
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 1,
  speed: 1000,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
  },
})
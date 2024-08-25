const menu = document.querySelector('.fa-bars');
const list = document.querySelector('.list');

menu.addEventListener('click', ()=>{
 list.classList.toggle('active');
 menu.classList.toggle('fa-x');
})
window.onscroll = () =>{
 list.classList.remove('active');
 menu.classList.remove('fa-x');
}



window.addEventListener('scroll', ()=>{
  const header = document.querySelector('.header');
  header.classList.toggle('active', window.scrollY > 150)
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
 
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView:4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView:3,
      spaceBetween: 50,
    },
  }
});
var swiperR = new Swiper(".myTests", {

  breakpoints: {
    600: {
      slidesPerView:1,
      spaceBetween: 50,
    },
    768: {
      slidesPerView:4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView:3,
      spaceBetween: 50,
    },
  }
});

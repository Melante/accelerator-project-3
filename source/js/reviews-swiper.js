import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Scrollbar } from 'swiper/modules';


const programsSwiper = new Swiper('.reviews__swiper', {
  modules: [Navigation, Scrollbar],
  direction: 'horizontal',
  loop: false,
  speed: 500,
  navigation: {
    nextEl: '.reviews__next',
    prevEl: '.reviews__prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    }
  }
},
);

programsSwiper.slideReset();

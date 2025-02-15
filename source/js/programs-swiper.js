import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Scrollbar } from 'swiper/modules';

const programsSwiper = new Swiper('.programs__swiper', {
  modules: [Navigation, Scrollbar],
  direction: 'horizontal',
  loop: false,
  speed: 500,
  navigation: {
    nextEl: '.programs__next',
    prevEl: '.programs__prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,

    }
  }

},
);

programsSwiper.slideReset();

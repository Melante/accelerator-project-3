import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Scrollbar } from 'swiper/modules';

const tabLinks = document.querySelectorAll('.news__tabs-link');


tabLinks.forEach((link) => {
  link.addEventListener('click', () => {
    tabLinks.forEach((item) => item.classList.remove('news__tabs-link--active'));
    link.classList.add('news__tabs-link--active');
  });
});

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
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    }
  }

},
);

programsSwiper.slideReset();

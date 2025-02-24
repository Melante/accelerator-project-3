import Swiper from 'swiper';
import 'swiper/css';
import {Keyboard, Navigation, Pagination} from 'swiper/modules';

const paginationSlide = document.querySelector('.hero__pagination');


const paginationPosition = () => {
  const activeSlide = document.querySelector('.swiper-slide-active');
  const containerBlocks = activeSlide.querySelector('.hero__slide-container');
  const paginationBottom = containerBlocks.clientHeight;
  paginationSlide.style.bottom = `${paginationBottom}px`;
};

const debouncedResize = debounce(() => {
  paginationPosition();
}, 300);

function debounce(callback, timeoutDelay = 300) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const heroSwiper = new Swiper('.hero__swiper', {
  modules: [Pagination, Navigation, Keyboard],
  direction: 'horizontal',
  loop: true,
  speed: 500,
  slidesPerView: 1,
  allowTouchMove: true,
  autoHeight: true,
  pagination: {
    el: '.hero__pagination',
    bulletClass: 'hero__pagination-bullet',
    bulletActiveClass: 'hero__pagination-bullet--active',
    clickable: true,

  },
  on: {
    init: function () {
      debouncedResize();
    },
    slideChange: function () {
      debouncedResize();
    },
    slideChangeTransitionEnd: function () {
      debouncedResize();
    },
    resize: function () {
      paginationPosition();
      heroSwiper.init();
    },
  },

  breakpoints: {
    768: {
      allowTouchMove: false,
    }
  }
},
);



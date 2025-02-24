import Swiper from 'swiper';
import 'swiper/css/grid';
import { Navigation, Grid, Pagination } from 'swiper/modules';

const newsSwiper = new Swiper('.news__swiper', {
  modules: [Navigation, Pagination, Grid],
  direction: 'horizontal',
  loop: false,
  speed: 500,
  navigation: {
    nextEl: '.news__next',
    prevEl: '.news__prev',
  },
  on: {
    init: function () {
      if (window.innerWidth >= 320 && window.innerWidth < 768) {
        const slides = this.slides;
        slides.forEach((slide, index) => {
          if (index % 2 === 0) {
            slide.style.height = '330px';
          } else {
            slide.style.height = '240px';
          }
        });
      } else {
        return null;
      }
    },
  },
  pagination: {
    el: '.news__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${ className }">${ index + 1 }</span>`;
    },
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      autoHeight: false,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      autoHeight: false,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      grid: {
        rows: 1,
        fill: 'row',
      },
      spaceBetween: 32,
    }
  }
},
);

newsSwiper .slideReset();

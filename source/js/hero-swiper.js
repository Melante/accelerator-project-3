import Swiper from 'swiper';
import 'swiper/css';
import {Keyboard, Navigation, Pagination} from 'swiper/modules';

// const paginationSlide = document.querySelector('.hero__pagination');
// const containerBlocks = document.querySelectorAll('.hero__slide-container');

// // Создаем массив для хранения значений bottom
// const bottomValues = Array.from(containerBlocks).map((containerBlock, index) => {
//   const heightBlock = containerBlock.offsetHeight;
//   const bottomValue = heightBlock + 10; // добавляем 10 пикселей к высоте
//   console.log(`Слайд ${index}: высота = ${heightBlock}, bottom = ${bottomValue}px`);
//   return bottomValue; // возвращаем значение для массива
// });

// // Функция для обновления значения bottom
// function updatePaginationBottom(currentIndex) {
//   paginationSlide.style.bottom = `${bottomValues[currentIndex]}px`;
// }

// Инициализируем слайд
// const currentSlideIndex = 0;
// updatePaginationBottom(currentSlideIndex);

// Пример обработки события переключения слайдов
// document.querySelectorAll('.pagination-button').forEach((button, index) => {
//   button.addEventListener('click', () => {
//     currentSlideIndex = index; // обновляем текущий индекс
//     updatePaginationBottom(currentSlideIndex); // обновляем значение bottom
//   });
// });

// Теперь bottomValues содержит высоты для каждого слайда
// updatePaginationBottom();
// console.log(updatePaginationBottom());

// const paginationSlide = document.querySelector('.hero__pagination');
// const containerBlocks = document.querySelectorAll('.hero__slide-container');

// // Создаем массив для хранения значений bottom
// const bottomValues = Array.from(containerBlocks).map((containerBlock, index) => {
//   const heightBlock = containerBlock.offsetHeight;
//   const bottomValue = heightBlock + 20;
//   console.log(`Слайд ${index}: высота = ${heightBlock}, bottom = ${bottomValue}px`);

//   // Устанавливаем значение bottom для текущего слайда
//   paginationSlide.style.bottom = `${bottomValue}px`;
//   console.log(paginationSlide.style.bottom);
//   return bottomValue; // возвращаем значение для массива
// });

// // Теперь bottomValues содержит высоты для каждого слайда
// console.log(bottomValues);

// containerBlocks.forEach((containerBlock, index) => {
//   const heightBlock = containerBlock.offsetHeight;
//   console.log(heightBlock);

//   paginationSlide.style.bottom = `${heightBlock + 10}px`;

//   console.log(index);
//   console.log(paginationSlide.style.bottom);


// });


// containerBlocks.forEach((containerBlock) =>{
//   containerBlock.insertBefore(paginationSlide, containerBlock.firstChild);
// });
const heroSwiper = new Swiper('.hero__swiper', {
  modules: [Pagination, Navigation, Keyboard],
  direction: 'horizontal',
  loop: true,
  speed: 500,
  slidesPerView: 1,
  pagination: {
    el: '.hero__pagination',
    bulletClass: 'hero__pagination-bullet',
    bulletActiveClass: 'hero__pagination-bullet--active',
    clickable: true,
  },

  breakpoints: {
    768: {
      allowTouchMove: false,
    }
  }
},
);

heroSwiper.slideReset();

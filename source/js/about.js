const button = document.querySelector('.about__button');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__form-button-close');

const body = document.querySelector('.page__body');

function backBody () {
  body.classList.toggle('page__body-menu');
  body.style.overflow = modalClose ? 'hidden' : '';
}

button.addEventListener('click', () => {
  modal.classList.add('modal-open');
  modal.scrollIntoView({ behavior: 'smooth' });
  backBody();
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal-open');
  button.focus();
  backBody();
});

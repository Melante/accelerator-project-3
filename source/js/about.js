const button = document.querySelector('.about__button');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__form-button-close');

const body = document.querySelector('.page__body');

function backBody () {
  const modalOpen = body.classList.toggle('page__body-menu--modal');
  body.style.overflow = modalOpen ? 'hidden' : '';
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

// валидация модального окна
const form = document.querySelector('.modal__form');
const phone = document.querySelector('.phone');
const nameUser = document.querySelector('.name');
const checkboxValidate = document.querySelector ('.modal__form-input-checkbox');

const namePattern = /^[а-яА-ЯёЁa-zA-Z\s]+$/;
const phonePattern = /^[+][7][\d -]{10,16}$/;

function validateCheckbox() {
  if (!checkboxValidate.checked) {
    checkboxValidate.classList.add('modal__form-checkbox--error');
  } else {
    checkboxValidate.classList.remove('modal__form-checkbox--error');
  }
}


function formModalValidation() {
  form.addEventListener('submit', (evt) =>{
    evt.preventDefault();

    let validPhone = false;
    let validName = false;

    if(!namePattern.test(nameUser.value)) {
      nameUser.setCustomValidity('Введите имя ');
      nameUser.classList.add('modal__form-input--error');
    } else {
      nameUser.setCustomValidity('');
      nameUser.classList.remove('modal__form-input--error');
      validName = true;
    }

    if(!phonePattern.test(phone.value)) {
      phone.classList.add('modal__form-input--error');
      phone.setCustomValidity('Доступны только цифры и в формате +7(10цифр)');
    } else {
      phone.setCustomValidity('');
      phone.classList.remove('modal__form-input--error');
      validPhone = true;
    }


    if (validPhone && validName) {
      form.submit();
    }
  });

  nameUser.addEventListener('input', () => {
    nameUser.setCustomValidity('');
    nameUser.classList.remove('modal__form-input--error');
  });

  phone.addEventListener('input', () => {
    phone.setCustomValidity('');
    phone.classList.remove('modal__form-input--error');
  });
}
formModalValidation();
validateCheckbox();

const button = document.querySelector('.form__group-button');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownOpen = document.querySelector('.dropdown__button');
const dropdownItem = document.querySelectorAll('.dropdown__item');
const dropdownInput = document.querySelector('.modal__form-input-dropdown');

button.addEventListener('click', () => {
  dropdownList.classList.toggle('dropdown__list-open');
  dropdownOpen.classList.toggle('dropdown__button-close');
});

dropdownItem.forEach((listItem) =>{
  listItem.addEventListener('click', function() {
    button.innerText = this.innerText;
    dropdownInput.value = this.dataset.value;
    dropdownList.classList.remove('dropdown__list-open');
  });
});

// валидация формы
const form = document.querySelector('.form__container');
const phone = document.querySelector('.phone-user');
const nameUser = document.querySelector('.name-user');
const textUser = document.querySelector('.text-user');

const namePattern = /^[а-яА-ЯёЁa-zA-Z\s]+$/;
const phonePattern = /^[+][7][\d -]{10,16}$/;
const commentLength = (value) => value.length > 20;


function formValidation() {
  form.addEventListener('submit', (evt) =>{
    evt.preventDefault();

    let validPhone = false;
    let validName = false;
    let validText = false;

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

    if(!commentLength(textUser.value)) {
      textUser.classList.add('modal__form-input--error');
      textUser.setCustomValidity('Введите сообщение от 20 символов');
    } else {
      textUser.setCustomValidity('');
      textUser.classList.remove('modal__form-input--error');
      validText = true;
    }


    if (validPhone && validName && validText) {
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

  textUser.addEventListener('input', () => {
    textUser.setCustomValidity('');
    textUser.classList.remove('modal__form-input--error');
  });
}
formValidation();

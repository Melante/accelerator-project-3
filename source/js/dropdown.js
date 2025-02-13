const button = document.querySelector('.form-dropdown__button');
const dropdownList = document.querySelector('.form-dropdown__list');
const dropdownOpen = document.querySelector('.form-dropdown__button');
const dropdownItem = document.querySelectorAll('.form-dropdown__item');
const dropdownInput = document.querySelector('.form-dropdown__input');

button.addEventListener('click', () => {
  dropdownList.classList.toggle('form-dropdown__list-open');
  dropdownOpen.classList.toggle('form-dropdown__button-close');
});

dropdownItem.forEach((listItem) =>{
  listItem.addEventListener('click', function() {
    button.innerText = this.innerText;
    dropdownInput.value = this.dataset.value;
    dropdownList.classList.remove('form-dropdown__list-open');
  });
});

const button = document.querySelector('.header__nav-button');
const menuBurger = document.querySelector('.header__nav-button-open');
const menu = document.querySelector('.header__overlay');
const body = document.querySelector('.page__body');
// const logoHeader = document.querySelector('.header__nav-logo');

const submenuButtons = document.querySelectorAll('.header__menu-link-submenu');

button.addEventListener('click', () => {
  const isOpen = menuBurger.classList.toggle('modal__form-button-close');
  menu.classList.toggle('header__overlay-open');
  body.classList.toggle('page__body-menu');

  body.style.overflow = isOpen ? 'hidden' : '';

  if(menuBurger.classList.contains('header__nav-button--close')){
    menuBurger.setAttribute('aria-expanded', 'true');

    const menuWidth = menu.offsetWidth;
    button.style.width = `${menuWidth}px`;
    button.style.transition = 'all 0.5s ease';
    // Проверка на ширину экрана
    // if(window.innerWidth < 450){
    //   logoHeader.style.display = 'none';
    // } else {
    //   logoHeader.style.display = 'block';
    // }

  }else{
    menuBurger.setAttribute('aria-expanded', 'false');
    button.style.width = 'auto';
    button.style.transition = 'all 0.5s ease';
  }
});

submenuButtons.forEach((submenuButton) =>{
  const submenuOpen = submenuButton.nextElementSibling;
  const submenuIcon = submenuButton;
  submenuButton.addEventListener('click', () => {
    submenuOpen.classList.toggle('header__menu-submenu--open');
    submenuIcon.classList.toggle('header__menu-link-submenu--open');

  });
});



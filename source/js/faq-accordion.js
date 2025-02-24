const items = document.querySelectorAll('.faq__item');

items.forEach((item) => {
  const header = item.querySelector('.faq__question');
  const button = item.querySelector('.faq__question-button');
  header.addEventListener('click', () => {

    item.classList.toggle('faq__item-active');
    button.classList.toggle('faq__question-button--close');

    if (button.classList.contains('faq__question-button--close')) {
      button.querySelector('span').textContent = 'Открыть ответ на данный вопрос';
    } else {
      button.querySelector('span').textContent = 'Закрыть ответ на данный вопрос';
    }
  });
});

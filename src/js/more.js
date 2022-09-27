export const showMore = () => {
  const moreBtns = document.querySelectorAll('.more-btn');

  moreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const showAttr = btn.getAttribute('data-show');
      const showElement = document.querySelector(`.${showAttr}`);

      if (showElement.classList.contains(`${showAttr}--active`)) {
        showElement.classList.remove(`${showAttr}--active`);
        // btn.querySelector('span').textContent = 'Читать далее';
        if (showElement.classList.contains('services__text-block')) {
          btn.querySelector('span').textContent = 'Читать далее';
        } else {
          btn.querySelector('span').textContent = 'Показать все';
        }
        btn.querySelector('.more-btn__img').style.rotate = '0deg';
      } else {
        showElement.classList.add(`${showAttr}--active`);
        btn.querySelector('span').textContent = 'Скрыть';
        btn.querySelector('.more-btn__img').style.rotate = '180deg';
      }
    });
  });
}

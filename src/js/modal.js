import { stopScroll } from './stopScroll';

export const modal = () => {
  const modal = document.querySelectorAll('.modal');
  const modalBtns = document.querySelectorAll('.callback__btn');
  const closeModalBtns = document.querySelectorAll('.modal__close');

  modalBtns.forEach(btn => {
    if (btn.hasAttribute('data-modal')) {
      btn.addEventListener('click', () => {
        const sidebar = document.querySelector('.sidebar')
        const showModalAttr = btn.getAttribute('data-modal');
        const showModal = document.querySelector(`.${showModalAttr}`);
        showModal.classList.add('modal--active');
        stopScroll();

        if (sidebar.classList.contains('sidebar--active')) {
          sidebar.classList.remove('sidebar--active');
        }
      });
    }
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentNode.parentNode.classList.remove('modal--active');
      stopScroll();
    });
  });

  modal.forEach(modal => {
    modal.addEventListener('click', (event) => {
      if (!event.target.closest('.modal__body')) {
        modal.classList.remove('modal--active');
        stopScroll();
      }
    });
  });
}

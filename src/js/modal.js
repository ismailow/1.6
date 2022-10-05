import { toggleScroll } from './toggleScroll';

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
        showModal.querySelector('.modal__input').focus();
        toggleScroll();

        if (sidebar.classList.contains('sidebar--active')) {
          sidebar.classList.remove('sidebar--active');
        }
      });
    }
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentNode.parentNode.classList.remove('modal--active');
      toggleScroll();
    });
  });

  modal.forEach(modal => {
    modal.addEventListener('click', (event) => {
      if (!event.target.closest('.modal__body')) {
        modal.classList.remove('modal--active');
        toggleScroll();
      }
    });
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modal.forEach(item => {
        if (item.classList.contains('modal--active')) {
          item.classList.remove('modal--active');
          toggleScroll();
        }
      })
    }
  })
}

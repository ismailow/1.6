import { toggleScroll } from './toggleScroll';

export const burger = () => {
  const openBurgerBtn = document.querySelector('.header__burger');
  const closeBurgerBtn = document.querySelector('.aside__close');
  const sidebar = document.querySelector('.sidebar');

  openBurgerBtn.addEventListener('click', () => {
    sidebar.classList.add('sidebar--active');
    toggleScroll();
  });

  closeBurgerBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar--active');
    toggleScroll();
  });

  sidebar.addEventListener('click', (event) => {
    if (!event.target.closest('aside')) {
      sidebar.classList.remove('sidebar--active');
      toggleScroll();
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && sidebar.classList.contains('sidebar--active')) {
      sidebar.classList.remove('sidebar--active');
      toggleScroll();
    }
  })
};

export const Burger = () => {
  const openBurgerBtn = document.querySelector('.header__burger');
  const closeBurgerBtn = document.querySelector('.aside__close');
  const sidebar = document.querySelector('.sidebar');

  openBurgerBtn.addEventListener('click', () => {
    sidebar.classList.add('sidebar--active');
  });

  closeBurgerBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar--active');
  });

  sidebar.addEventListener('click', (event) => {
    if (!event.target.closest('aside')) {
      sidebar.classList.remove('sidebar--active');
    }
  });
};

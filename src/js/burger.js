export const Burger = () => {
  const openBurgerBtn = document.querySelector('.header__burger');
  const closeBurgerBtn = document.querySelector('.aside__close');
  const burgerMenu = document.querySelector('.aside');
  const sidebar = document.querySelector('.sidebar');

  openBurgerBtn.addEventListener('click', () => {
    burgerMenu.classList.add('aside--active');
  });
  closeBurgerBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('aside--active');
  });
};

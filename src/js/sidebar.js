export const sidebar = () => {
  let windowWidth = window.innerWidth;
  const sidebarPos = () => {
    const containerLeft = document.querySelector('.services__container').getBoundingClientRect().left;
    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth >= 1440) {
      sidebar.style.left = `${containerLeft - 320}px`;
    }
  }
  sidebarPos();
  window.addEventListener('resize', sidebarPos);
};

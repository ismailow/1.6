export const toggleScroll = () => {
  const sidebar = document.querySelector('.sidebar');
  const modalFeedback = document.querySelector('.modal-feedback');
  const modalCallback = document.querySelector('.modal-callback');
  if (sidebar.classList.contains('sidebar--active') || modalFeedback.classList.contains('modal--active')  || modalCallback.classList.contains('modal--active')) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'visible';
  }
}

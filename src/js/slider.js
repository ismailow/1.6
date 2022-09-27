import Swiper, {Pagination} from 'swiper';
import 'swiper/swiper.scss';

export const slider = () => {
  // const swiper = new Swiper('.swiper', {
  //   width: 240,
  //   slidesPerView: 1,
  //   spaceBetween: 16,
  //   modules: [Pagination],
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  // })
  let swiper;
  let init = false;

  const loadSlider = () => {
    let windowWidth = window.innerWidth;
    console.log(windowWidth)
    if (windowWidth < 768) {
      if (!init) {
        init = true;
        swiper = new Swiper('.swiper', {
          width: 240,
          slidesPerView: 1,
          spaceBetween: 16,
          modules: [Pagination],
          pagination: {
            el: '.swiper-pagination',
          },
          breakpoints: {
            560: {
              slidesPerGroup: 2,
            }
          }
        })
      }
    } else if (init) {
      swiper.destroy();
      init = false;
    }
  }

  loadSlider();
  window.addEventListener('resize', loadSlider);
}


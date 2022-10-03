import Swiper, {Pagination} from 'swiper';

export const slider = () => {
  const sliderOptions = (width ,pagination) => {
    return {
      width: width,
      slidesPerView: 1,
      spaceBetween: 16,
      modules: [Pagination],
      pagination: {
        el: pagination,
      },
      breakpoints: {
        560: {
          slidesPerGroup: 2,
        }
      }
    };
  };
  let brandsSlider
  let technicsSlider;
  let pricesSlider;
  let init = false;

  const loadSlider = () => {
    let windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      if (!init) {
        init = true;
        brandsSlider = new Swiper('.brands__slider', sliderOptions(240, '.brands__pagination'));
        technicsSlider = new Swiper('.technics__slider', sliderOptions(240, '.technics__pagination'));
        pricesSlider = new Swiper('.prices__slider', sliderOptions(260, '.prices__pagination'))
      }
    } else if (init) {
      brandsSlider.destroy();
      technicsSlider.destroy();
      pricesSlider.destroy();
      init = false;
    }
  };

  loadSlider();
  window.addEventListener('resize', loadSlider);
}


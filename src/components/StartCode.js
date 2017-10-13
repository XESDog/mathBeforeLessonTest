const Swiper = require('swiper')
export default {
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        mousewheelControl: true
      }
    }
  },
  mounted() {
    new Swiper('.swiper-container', {
      // direction: 'vertical',
      direction: 'horizontal',
    })
  }
};

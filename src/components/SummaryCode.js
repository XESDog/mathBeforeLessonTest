import { swiper, swiperSlide } from 'vue-awesome-swiper';
import Buttons from './Buttons.vue';
import PercentBar from './PercentBar.vue';
import Arrows from './Arrows.vue';
import RadarGraphic from './RadarGraphic.vue';
export default {
    data:function(){
      return {
        swiperOption: {
          notNextTick: true,
           pagination: '.swiper-pagination',
           slidesPerView: 'auto',
           centeredSlides: true,
           resistanceRatio:0,

           direction:'vertical',

        } ,
        dd:500,
        point_arry:[
          [40,200],
          [100,200],
          [90,200],
          [100,200],
          [100,200],
          [180,200],
        ]
      }
    },
    components:{swiper,swiperSlide,PercentBar,RadarGraphic,Arrows,Buttons},
    mounted:function(){



    }
}

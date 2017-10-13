// import Swiper from 'swiper';
const Swiper = require('swiper');
import PercentBar from './PercentBar.vue'
import Arrows from './Arrows.vue';
import RadarGraphic from './RadarGraphic.vue';
export default {
    data:function(){
      return {
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
    components:{PercentBar,RadarGraphic,Arrows},
    mounted:function(){
      console.log(Swiper)
     let hammer_tgt = document.querySelector('.radermap');
      let swiper_tgt = document.querySelector('.radermap');

    let swiper = new Swiper(document.getElementById('swiper-container'),{
      direction: 'vertical',
      loop: false,



 });

    }
}

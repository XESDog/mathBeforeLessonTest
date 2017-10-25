import { swiper, swiperSlide } from 'vue-awesome-swiper';
import LevelMonster from './LevelMonster.vue';
import {mapState, mapGetters} from 'vuex';
export  default {

    data(){
      return {
        mapX:{
          transform:"translate(0,0)"
        },
        swiperOption: {
          notNextTick: true,
           pagination: '.swiper-pagination',
           resistanceRatio:0,
           direction:'vertical',
           mousewheelControl:true
        },
        levelMonsterList:[
          //Monster 1
          {
            monstersrc:"static/maps/monster_1.png",
            leveldisabledsrc:"#",
            levelabledsrc:"static/maps/level1.png",
            stateOpen:true,
            monsterRect:{
              x:'0.5rem',
              y:'-0.4rem',
              w:'3.09rem',
              h:'2.66rem'
            },
            levelRect:{
              x:'1.9rem',
              y:'2.9rem',
              w:'3.99rem',
              h:'3.06rem'

            },
          },
          //Monster2
          {
            monstersrc:"static/maps/monster_2.png",
            leveldisabledsrc:"static/maps/level2_gray.png",
            levelabledsrc:"static/maps/level2.png",
            stateOpen:false,
            monsterRect:{
              x:'0.5rem',
              y:'0',
              w:'2.48rem',
              h:'2.18rem'
            },
            levelRect:{
              x:'8.4rem',
              y:'1.7rem',
              w:'3.32rem',
              h:'3.08rem'

            },
          },
          //monster_3
          {
            monstersrc:"static/maps/monster_3.png",
            leveldisabledsrc:"static/maps/level3_gray.png",
            levelabledsrc:"static/maps/level3.png",
            stateOpen:false,
            monsterRect:{
              x:'0.7rem',
              y:'-0.02rem',
              w:'2.67rem',
              h:'2.73rem'
            },
            levelRect:{
              x:'13.74rem',
              y:'4.4rem',
              w:'3.99rem',
              h:'3.14rem'

            },
            levelAbledY:'1.58rem'
          },

          //monster4
          {
            monstersrc:"static/maps/monster_4.png",
            leveldisabledsrc:"static/maps/level4_gray.png",
            levelabledsrc:"static/maps/level4.png",
            stateOpen:false,
            monsterRect:{
              x:'0.51rem',
              y:'-0.06rem',
              w:'2.20rem',
              h:'2.27rem'
            },
            levelRect:{
              x:'22.1rem',
              y:'0.62rem',
              w:'3.32rem',
              h:'3.03rem'

            },
            levelAbledY:'1.2rem'
          },
          //monster5
          {
            monstersrc:"static/maps/monster_5.png",
            leveldisabledsrc:"static/maps/level5_gray.png",
            levelabledsrc:"static/maps/level5.png",
            stateOpen:false,
            monsterRect:{
              x:'0.91rem',
              y:'-0.06rem',
              w:'2.27rem',
              h:'2.36rem'
            },
            levelRect:{
              x:'26.8rem',
              y:'4.2rem',
              w:'3.99rem',
              h:'3.16rem'

            },
            levelAbledY:'1.2rem'
          },
          //monster6
          {
            monstersrc:"static/maps/monster_5.png",
            leveldisabledsrc:"static/maps/level6_gray.png",
            levelabledsrc:"static/maps/level6.png",
            stateOpen:false,
            monsterRect:{
              x:'1.42rem',
              y:'-0.06rem',
              w:'2.27rem',
              h:'2.36rem'
            },
            levelRect:{
              x:'32.3rem',
              y:'0.94rem',
              w:'5.06rem',
              h:'3.02rem'

            },
            levelAbledY:'1.2rem'
          },
        ]

      }
    },
    computed:{
      mymonstersrc:function(){
        return "static/maps/monster_1.png"
      }
    },
    components:{
      LevelMonster
    },
    methods:{
      clicklevelme(openstate){
        if(!openstate)return;
        this.$router.push('/question')
      }
    },
    mounted(){
      const self = this;
      let xpos = 0;
      let levelPos=[
        {
          x:"0"
        },
        {
          x:"-2rem"
        },
        {
          x:"-10rem"
        },
        {
          x:"-15rem"
        },
        {
          x:"-19.2rem"
        }
      ]
      self.mapX = {
        transform:"translate(0,0)"
      }
      // setInterval(()=>{
      //   if(xpos>=4)return;
      //   xpos++;
      //   self.mapX = {
      //     transform:"translate("+levelPos[xpos].x+",0px)"
      //   }
      //   console.log(self.mapX)
      // },1200)

    }
}

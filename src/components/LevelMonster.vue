<template>
  <div class="monster" :style="levelSyle" @click="clicklevel()">
    <div class="light" v-if="showLight" :style="lightStyle">
      <img draggable="false" src="static/maps/light.png" width="100%" height="auto"/>
    </div>
    <img draggable="false" class="level_disabled" v-show="showLevel"  :src="levelDisabledSrc"  width="100%" height="auto"/>
    <img draggable="false" class="level_abled" v-show="showMonster"  :style="levelAbledStyle" :src="levelAbledSrc"  width="100%" height="auto"/>
    <img draggable="false"  ref="monster" class="monster" v-show="showMonster" :style="monsterStyle" :src="monsterSrc"/>
    <div class="tipsDone" ref="tipsModal" v-show="showCompleteTip">已完成测试</div>
    <div class="tipsYet" ref="tipsModalYet" v-show="yetCompleteTip">还未解锁哦！</div>

  </div>
</template>
<script>
const Velocity = require('velocity-animate');
  export default{
    props:{
      //已经完成状态

      stateDone:{
        type:Boolean,
        default:false
      },
      //关卡是否开启
      stateOpen:{
        type:Boolean,
        default:false
      },
      showCompleteTip:true,
      yetCompleteTip:true,

      stateNew:{
        type:Boolean,
        default:false
      },
      monstersrc:{
        type:String,
        default:"#"
      },
      levelabledsrc:{
        type:String,
        default:'#'
      },
      leveldisabledsrc:{
        type:String,
        default:'#'
      },
      levelRect:{
        type:Object,
        default(){
          return {
            x:0,
            y:0,
            w:'3.32rem',
            h:'3.08rem'
          }
        }
      },
      lightPos:{
        type:Object,
        default(){
          return{
            x:0,
            y:0
          }
        }
      },
      //台的垂直距离
      levelAbledY:{
        type:String,
        default:'1.2rem'
      },
      //怪物头大小位置
      monsterRect:{
        type:Object,
        default(){
          return {
            x:'1.5rem',
            y:'0',
            w:'2.48rem',
            h:'2.18rem'
          }
        }
      }
    },
    data(){
      return{

        levelSyle:{
          left:this.levelRect.x,
          top:this.levelRect.y,
          width:this.levelRect.w,
          height:this.levelRect.h
        },
        monsterStyle:{
          left:this.monsterRect.x,
          top:this.monsterRect.y,
          width:this.monsterRect.w,
          height:this.monsterRect.h,

        },
        levelAbledStyle:{
          top:this.levelAbledY,

        },
        lightStyle:{
          left:this.lightPos.x,
          top:this.lightPos.y
        },
        showlightState:this.stateNew,


      }
    },

    computed:{
      monsterSrc(){
        return this.monstersrc
      },
      levelAbledSrc(){
        return this.levelabledsrc
      },
      levelDisabledSrc(){
        return this.leveldisabledsrc
      },
      showMonster(){
        return this.stateOpen
      },
      showLevel(){
        return !this.stateOpen
      },
      showLight(){
        if(this.stateNew){
          this.playAnime(this.$refs.monster)
        }
        return this.stateNew;
      },

    },

    methods:{
      clicklevel(){

        this.$emit("CLICK_LEVEL");
        //通过判断是否玩过此关卡，切换不同的Tip提示文字动画
        if(this.stateOpen){
            this.playModal(this.$refs.tipsModal);
        }else{
          this.playYetModal(this.$refs.tipsModalYet);

        }

        //this.playYetModal(this.$refs.tipsModal)
      },
      playAnime(obj){
        this.$emit("PLAY_ANIME",obj);
      },
      playModal(obj){
        this.$emit("PLAY_MODAL",obj,this.stateNew);
      },
      playYetModal(obj){
        this.$emit("PLAY_YET_MODAL",obj,this.stateNew);
      }

    },
    mounted(){
      //this.playAnime(this.$refs.monster);
    }
  }
</script>
<style scoped lang="scss">

.mapscene{
  position: absolute;
  top:0px;
  width:100%;
  height:100%;
  .monster{
    cursor: pointer;
    position: absolute;
    img.level_abled{
      position: absolute;
      display: block;

    }
    img.level_disabled{
      position: absolute;
      display: block;
      top:0;
    }
    img.monster{
      position: absolute;
      display: block;
    }
  }
  .tipsDone{
    position: absolute;
    width:2.6rem;
    height:0.6rem;
    border-radius: 2rem;
    background-color:white;
    color:black;
    text-align: center;
    line-height: 0.7rem;
    font-size: 0.32rem;
    margin:0 auto;
    left:0px;
    right:0;
    top:-0.2rem;
    opacity:0;
  }
  .tipsYet{
    position: absolute;
    width:2.6rem;
    height:0.6rem;
    border-radius: 2rem;
    background-color:white;
    color:black;
    text-align: center;
    line-height: 0.7rem;
    font-size: 0.32rem;
    margin:0 auto;
    left:0px;
    right:0;
    top:-0.2rem;
    opacity:0;
  }
  .light{
    position: relative;
    width:5.09rem;
    height:3.49rem;


    img{
      position: absolute;
      display: block;
      width:100%;
      height:auto;
    }
  }


}

</style>

<template>
  <div class="monster" :style="levelSyle" @click="clicklevel()">

    <img draggable="false" class="level_disabled" v-show="showLevel"  :src="levelDisabledSrc"  width="100%" height="auto"/>
    <img draggable="false" class="level_abled" v-show="showMonster"  :style="levelAbledStyle" :src="levelAbledSrc"  width="100%" height="auto"/>
    <img draggable="false" class="monster" v-show="showMonster" :style="monsterStyle" :src="monsterSrc"/>
  </div>
</template>
<script>
  export default{
    props:{
      stateOpen:{
        type:Boolean,
        default:false
      },
      stateNewer:{},
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
      }
    },
    methods:{
      // clicklevel(item){
      //   if(!item.stateOpen)return;
      //   alert(88)
      // }
      clicklevel(){
        this.$emit("CLICK_LEVEL")
      }
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

}
</style>

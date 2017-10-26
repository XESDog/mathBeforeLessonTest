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
  import LevelMonster from './LevelMonsterCode';
  export default LevelMonster;
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
    line-height: 0.6rem;
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
    line-height: 0.6rem;
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

<template>
    <div>
      <div>Game Map</div>
      <div>Level{{$store.state.currentLevel}}</div>
<<<<<<< HEAD
      <!-- <button @click="$router.push('/question')">进入关卡</button> -->
      <div class="mapscene" :style="mapX">

          <img draggable="false" src="static/maps/bg.jpg" height="100%" />
          <LevelMonster v-for="(item,index) in levelMonsterList" key="index" :levelabledsrc="item.levelabledsrc" :leveldisabledsrc="item.leveldisabledsrc"
          :monstersrc="item.monstersrc" :stateOpen="item.stateOpen" :monsterRect="item.monsterRect" :levelRect="item.levelRect" :levelAbledY="item.levelAbledY"
          @CLICK_LEVEL="clicklevelme(item.stateOpen)"/>

           <!-- <div class="monster">

            <img class="level_disabled" src="static/maps/level2_gray.png" width="100%" height="auto"/>
            <img class="level_abled" src="static/maps/level2.png" width="100%" height="auto"/>
            <img class="monster" src="static/maps/monster_1.png"/>
          </div> -->
      </div>
=======
      <button @click="toNext">进入第{{currentLevel+1}}关</button>
      <!--<button @click="$router.push('/question')">进入第二关</button>-->
      <!--<button @click="$router.push('/question')">进入第三关</button>-->
      <!--<button @click="$router.push('/question')">进入第四关</button>-->
      <!--<button @click="$router.push('/question')">进入第五关</button>-->
      <!--<button @click="$router.push('/question')">进入第六关</button>-->
>>>>>>> 8d5b0fe067becaba80a8f6bfbca6aab846b2c07b
    </div>
</template>
<script>
  export default require('./GameMapCode');

</script>
<style scoped="" lang="scss">
$level2_x:2.3rem;
$level2_y:2.9rem;
$level2_w:3.32rem;
$level2_h:3.08rem;
$monster1_w:2.48rem;
$monster1_h:2.18rem;

.mapscene{
  position: absolute;
  top:0px;
  width:100%;
  height:100%;

  // .monster{
  //   position: absolute;
  //   width:$level2_w;
  //   height:$level2_h;
  //   top:$level2_y;
  //   left:$level2_x;
  //   img.level_abled{
  //     position: absolute;
  //     display: block;
  //     top:1.2rem;
  //     opacity: 0.5;
  //
  //   }
  //   img.level_disabled{
  //     position: absolute;
  //     display: block;
  //     top:0;
  //
  //   }
  //   img.monster{
  //     position: absolute;
  //     display: block;
  //     width:$monster1_w;
  //     height:$monster1_h;
  //     left:0.49rem;
  //     top:0rem;
  //   }
  // }

}

</style>

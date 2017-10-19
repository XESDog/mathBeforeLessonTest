<template>
    <div>
      <div>Game Map</div>
      <div>Level{{$store.state.currentLevel}}</div>
      <button @click="toNext">进入第{{currentLevel+1}}关</button>
      <!--<button @click="$router.push('/question')">进入第二关</button>-->
      <!--<button @click="$router.push('/question')">进入第三关</button>-->
      <!--<button @click="$router.push('/question')">进入第四关</button>-->
      <!--<button @click="$router.push('/question')">进入第五关</button>-->
      <!--<button @click="$router.push('/question')">进入第六关</button>-->
    </div>
</template>
<script>
  export default require('./GameMapCode');

</script>
<style scoped>

</style>


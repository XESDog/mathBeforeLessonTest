<template>
    <div>
      <div>Game Map</div>
      <div>Level{{$store.state.currentLevel}}</div>
      <button @click="$router.push('/question')">进入关卡</button>
    </div>
</template>
<script>
  export default require('./GameMapCode');

</script>
<style scoped>

</style>


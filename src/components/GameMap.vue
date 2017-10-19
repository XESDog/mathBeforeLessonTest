<template>
    <div>
      <div>Game Map</div>
      <div>Level{{$store.state.currentLevel}}</div>
      <button @click="toNext">进入第{{currentLevel+1}}关</button>
    </div>
</template>
<script>
  export default require('./GameMapCode');

</script>
<style scoped>

</style>


<template>
  <div id="app">
    <img id="logo" src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  $globalWidth:19.2rem;
  $globalHeight:10.8rem;
  html {
    height: 100%;
  }

  body {
    height: 100%;
    overflow: hidden;
    background-size: cover;
    margin: 0px;
    background:black;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-touch-callout:none;
    -webkit-touch-action-delay:none;
    -webkit-user-select:none;
    -webkit-text-size-adjust:none;

  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    width: $globalWidth;
    height: $globalHeight;
    overflow: hidden;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    user-select: none;
    cursor: default;
  }

  #logo {
    width: 2rem;
    position: absolute;
    left: 0.2rem;
    bottom: 0.4rem;
    z-index: 999;
  }
</style>

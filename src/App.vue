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

<style>

  html {
    height: 100%;
  }

  body {
    height: 100%;
    overflow: hidden;
    background-size: cover;
    margin: 0px;
    background:black;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    width: 19.2rem;
    height: 10.8rem;
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
  }

  button {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }

</style>

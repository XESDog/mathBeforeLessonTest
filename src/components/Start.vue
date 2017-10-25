<template>
  <div class="container">
    <swiper :options="swiperOption" class="swiper-box">
      <swiper-slide class="swiper-item">
          <div></div>
      </swiper-slide>
      <swiper-slide class="swiper-item"><img src="../assets/start_1.jpg"/></swiper-slide>
      <swiper-slide class="swiper-item"><img src="../assets/start_2.jpg"/></swiper-slide>
    </swiper>
    <button @click="$router.push('/gamemap')">开始测试</button>
  </div>
</template>
<script>
  export default require('./StartCode')
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  img {
    width: 100%;
  }
  .container {
    height: 100%
  }
  button {
    z-index: 2;
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }

  .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  .swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>

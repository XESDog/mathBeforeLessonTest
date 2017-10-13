<template>



  <div id="swiper-container" class="swiper-container radermap">
    <div class="swiper-wrapper">
        <div class="swiper-slide scene1">
            <div class="areabar">
            <PercentBar :width='3.13' :height='0.33'  :currentNum='100' :totalNum='100'/>
            <div class="gap"></div>
            <PercentBar :width='3.13' :height='0.33' :currentNum='10' :totalNum='100' color='#f97454' />
            <div class="gap"></div>
            <PercentBar :width='3.13' :height='0.33' :currentNum='10' :totalNum='100' color='#fcad2d'/>
            <div class="gap"></div>
            <PercentBar :width='3.13' :height='0.33' :currentNum='66' :totalNum='100' color='#aadc4b'/>
            <div class="gap"></div>
            <PercentBar :width='3.13' :height='0.33' :currentNum='10' :totalNum='100' color='#ff83ce'/>
            <div class="gap"></div>
            <PercentBar :width='3.13' :height='0.33' :currentNum='10' :totalNum='100' color='#a573f2'/>


          </div>
            <Arrows/>


        </div>

        <div class="swiper-slide scene2">

          <RadarGraphic  :point_Array="point_arry"/>
          <Arrows :dx='-5'/>
        </div>
        <div class="swiper-slide">Slide 3</div>


    </div>


    <!-- <div>RadarMap</div> -->
    <button @click="$router.push('./summary')">汇总</button>
</div>
</template>

<script>
  export default require('./RadarMapCode')

</script>
<style scoped>
.radermap{
  position: absolute;
  width:100%;
  background-color:white;
  height:10.8rem;
  overflow: hidden
}
.areabar{
  position: absolute;
  top:4.45rem;
  right:4.93rem;
  width:3.13rem;
  height:4.37rem;

}
.scene1{
  background-image: url(../../static/img/pinggu_band1.jpg);
  background-size: 100% 100%;

}
.scene2{
  background-image: url(../../static/img/pinggu_band2.jpg);
  background-size: 100% 100%;

}
.gap{
  height:0.32rem;
}
</style>

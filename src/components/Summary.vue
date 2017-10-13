<template>
       <swiper :options="swiperOption"  ref="mySwiper" style="height:10.8rem;">
             <!-- 这部分放你要渲染的那些内容 -->
             <swiper-slide class="scene1"  >
                     <div class="areabar">
                     <PercentBar :width='3.13' :height='0.33' :currentNum='50' :totalNum='100'/>
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
                   <Arrows :posx="0"/>
             </swiper-slide>
             <swiper-slide class="scene2">
                 <RadarGraphic  :point_Array="point_arry"/>
                 <Arrows :posx="-4.6" />
                  <Buttons src="sharebtn.png" :x="(19.2/2)-1.21" :y="10.8*0.72"/>
             </swiper-slide>
             <swiper-slide class="scene3">
                  <Buttons src="testbtn.png" :x="(19.2/2)-1.21" :y="10.8*0.67"/>
             </swiper-slide>
         </swiper>

</template>

<script>
  export default require('./SummaryCode')
</script>
<style scoped="" lang="scss">
$testfontSize:0.5rem;
.areabar{
  position: absolute;
  top:4.45rem;
  right:4.93rem;
  width:3.13rem;
  height:4.37rem;
}
.scene1,.scene2,.scene3{
position: relative;
height:10.8rem;
}
.scene1{
  background-image: url(../../static/img/pinggu_band1.jpg);
  background-size: 100% 100%;
}
.scene2{
  position: relative;
  background-image: url(../../static/img/pinggu_band2.jpg);
  background-size: 100% 100%;
}
.scene3{
  position: relative;
  background-image: url(../../static/img/pinggu_band3.jpg);
  background-size: 100% 100%;
}
.gap{
  height:0.32rem;
}
</style>

<template>
       <swiper :options="swiperOption"  ref="mySwiper" style="height:10.8rem;">
             <!-- 这部分放你要渲染的那些内容 -->
             <swiper-slide class="scene1"  >
                     <div class="areabar">
                     <PercentBar v-for="(item,key,index) in percentbarList" :key="index" :width='3.13'  :color='item.color' :height='0.33' :currentNum='item.currentNum' :score="item.score" :totalNum='100' style="margin-bottom:0.32rem"/>
                   </div>
                   <div class="userinfoband">
                      <div class='username'>{{username}}</div>
                      <div class='score'>{{score}}分</div>
                   </div>
                   <Arrows :posx="0"/>
             </swiper-slide>
             <swiper-slide class="scene2">
                 <RadarGraphic   :point_Array="point_arry"/>
                 <Arrows :posx="-4.6" />

                  <!-- <Buttons src="" :x="(19.2/2)-1.21" :y="10.8*0.72"/> -->
                   <div class="congratulationList">
                     恭喜宝贝，顺利完成本次测评。<br/>宝贝的推理能力、观察能力、动手能力很强，要继续保持哦！<br/>
                      运算能力、专注力、时间管理能力有待提高，要重视培养喽~~<br/>
                      点击下方“分享战绩”，邀请小伙伴一起参加测评吧~
                   </div>
                  <div class='button1'></div>
             </swiper-slide>
             <swiper-slide class="scene3">
               <div class="lessonTestLeft">
                 <div v-for="(item,index) in leftUlList" :key="index" class="ullist">
                   <div class="times">{{item.times}}</div>
                   <div class="lesson">{{item.lesson}}</div>
                   <div class='respons'>{{item.respons}}</div>
                 </div>
               </div>

               <div class="lessonTestRight">
                 <div v-for="(item,index) in rightUlList" :key="index" class="ullist">
                   <div class="times">{{item.times}}</div>
                   <div class="lesson">{{item.lesson}}</div>
                   <div class='respons'>{{item.respons}}</div>
                 </div>
               </div>
              <div class='button2'></div>
             </swiper-slide>
         </swiper>

</template>

<script>
  export default require('./SummaryCode')
</script>
<style scoped="" lang="scss">
$testfontSize:0.5rem;
$con_txsize:0.4rem;//恭喜面板字体
.areabar{
  position: absolute;
  top:4.45rem;
  right:4.93rem;
  width:3.13rem;
  height:4.37rem;
}
.userinfoband{
  position: relative;
  width:4.9rem;
  height:6.8rem;
  left:3.6rem;
  top:2.7rem;
  .username{
    position: absolute;
    text-align: center;
    line-height: auto;
    width:2rem;
    top:4.66rem;
    left:2rem;
    color:white;
    font-size: 0.4rem;
  }
  .score{
    position: absolute;
    text-align: center;
    line-height: auto;
    width:1.6rem;
    top:5.56rem;
    left:2rem;
    color:white;
    font-size: 0.44rem;

  }
};

.congratulationList{
  position: absolute;
  top:2.2rem;
  left:9.88rem;
  width:5.7rem;
  height:2rem;
   word-break: break-all;
   font-size: 0.31rem;
   padding-left: 0.4rem;
   padding-right:0.4rem;
   box-sizing: border-box;
   text-align: justify;
   line-height: 200%;
}
.lessonTestRight{
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width:5.7rem;
  height:auto;
  left:0px;
  top:0px;
  top:2.8rem;
  left:9.8rem;
  font-size: 0.2rem;
  .ullist{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    height:0.37rem;
    div{
     display: flex;
     position: relative;
     justify-content:center;
     align-items: center;
     color:#9a592a;
     height:0.36rem;
     font-weight: bold;
   }
   .times{
     width:1.06rem;
   }
  .lesson{
    flex-grow: 1;
  }
  .respons{
    width:1.75rem;
  }
  }
}

.lessonTestLeft{
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width:5.7rem;
  height:auto;
  left:0px;
  top:0px;
  top:2.8rem;
  left:3.58rem;
  font-size: 0.25rem;
  .ullist{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    height:0.565rem;
    div{
      display: flex;
      position: relative;
      justify-content:center;
      align-items: center;

      color:#9a592a;
      height:0.68rem;
      font-weight: bold;
    }
    .times{
      width:1.06rem;
    }
    .lesson{
      flex-grow: 1;
    }
    .respons{
      width:1.81rem;
    }
  }

}

.button1{
  position: absolute;
  top:0px;
  left:10px;
  width:2.8rem;
  height:1.04rem;
  background:url(../assets/sharebtn.png) no-repeat;
  background-size: 100% 100%;
  margin:0 auto;
  left:0px;
  right:0px;
  top:7.8rem;
  cursor: pointer;
}
.button2{
  position: absolute;
  top:0px;
  left:10px;
  width:2.8rem;
  height:1.04rem;
  background:url(../assets/testbtn.png) no-repeat;
  background-size: 100% 100%;
  margin:0 auto;
  left:0px;
  right:0px;
  top:7.2rem;
  cursor: pointer;
}
.scene1,.scene2,.scene3{
position: relative;
height:10.8rem;
}
.scene1{
  background-image: url(../assets/pinggu_band1.jpg);
  background-size: 100% 100%;
}
.scene2{
  position: relative;

  background-image: url(../assets/pinggu_band2.jpg);
  background-size: 100% 100%;
}
.scene3{
  position: relative;
  background-image: url(../assets/pinggu_band3.jpg);
  background-size: 100% 100%;

}
.gap{
  height:0.32rem;
}
</style>

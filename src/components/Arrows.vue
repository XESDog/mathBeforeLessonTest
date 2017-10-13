<template>
  <div ref="arrows"  class='arrows' :style="getDx">

    <img class='arrow1' width="100%" height="auto"  src="../../static/img/arrow_graphic.png"/>
    <img class='arrow2' width="100%" height="auto" src="../../static/img/arrow_graphic.png"/>
    <img class='arrow3' width="100%" height="auto" src="../../static/img/arrow_graphic.png"/>

  </div>
</template>
<script>
  export default{
    props:{
        posx:{
          type:Number,
          default:0
        }
    },
    computed:{
      getDx:function(){
        const self = this;
        return {
          left:self.posx+'rem'


        }
      }
    },
    data:function(){
      return {

      }
    },
    mounted:function(){

    }
  }
</script>
<style scoped="">
img{
  display: block;
  position: relative;
  width:100%;
  height:auto;
}
.arrows{
  position: absolute;
  margin:0 auto;
  left:0px;
  right:0px;
  width:0.68rem;
  top:9.7rem;
  opacity: 1;

}
.arrow1{
  animation:myanime1 0.8s linear 0s infinite alternate;
-webkit-animation:myanime1 0.8s linear 0s infinite alternate;
}
.arrow2{
  animation:myanime1 0.8s linear 0.3s infinite alternate;
  -webkit-animation:myanime1 0.8s linear 0.3s infinite alternate;
}
.arrow3{
  animation:myanime1 0.8s linear 0.6s infinite alternate;
  -webkit-animation:myanime1 0.8s linear 0.6s infinite alternate;
}
@keyframes myanime1 {
0%{
  opacity: 1
}
100%{
  opacity: 0.2
}

}
</style>

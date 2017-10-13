<template>
  <div class="mybutton" :style="mybutton">
    <img :src="getSrc" width="100%" height="auto"/>

  </div>
</template>
<script>
  export default{
    props:{
      src:{
        type:String,
        default:'#'
      },
      w:{
        type:Number,
        default:2.84
      },
      x:{
        type:Number,
        default:0
      },
      y:{
        type:Number,
        default:0
      }
    },
    computed:{
      mybutton:function(){
        let self = this;
        return{
          width:self.w+'rem',
          left:self.x+'rem',
          top:self.y+'rem'
        }
      },
      getSrc:function(){
        console.log(this.$store.getters.assetsPath)
        return this.$store.getters.assetsPath

      }
    },
    data:function(){
      return{

      }
    }
  }
</script>
<style scoped="">
  .mybutton{
    cursor: pointer;
    position: absolute;
    height:auto;
  }
</style>

<template>
  <div class="percentbar" :style="getpercentbar" >

    <div class="innerbar" :style="getInnerpercentbar"></div>
      <div class="percentbar_mask" :style="getmask">
        <div class="gap_w"></div>
        <div class="lightbar"></div>
        <div class="gap_w"></div>
      </div>
      <div class="scores">A</div>
  </div>
</template>
<script>
export default {
  name: 'hello',
  props:{
    width:{
      type:Number,
      default:2
    },
    height:{
      type:Number,
      default:0.3
    },
    color:{
      type:String,
      default:'#60e2ff'
    },

    innerHeight:{
      type:Number,
      default:0.24
    },
    currentNum:{
      type:Number,
      default:100
    },
    totalNum:{
      type:Number,
      default:100
    }
  },
  computed:{
    getInnerpercentbar:function(){
      const self = this;

      let pers = (this.currentNum/this.totalNum)*this.width*0.965;
      let cc = pers+'rem';

      return {
        width:cc,
        top:'0.04rem',
        left:'0.056rem',
        backgroundColor:self.color,

        height:self.innerHeight+'rem',
        borderTopLeftRadius: this.height/2+'rem',
        borderBottomLeftRadius: this.height/2+'rem',
        borderTopRightRadius: this.height/2+'rem',
        borderBottomRightRadius: this.height/2+'rem'
      };
    },
    getmask:function(){
      const self = this;

      let pers = (this.currentNum/this.totalNum)*this.width*0.965;
      let cc = pers+'rem';

      return {
        width:cc,
        top:'0.04rem',
        left:'0.056rem',


        height:self.innerHeight+'rem',
        borderTopLeftRadius: this.height/2+'rem',
        borderBottomLeftRadius: this.height/2+'rem',
        borderTopRightRadius: this.height/2+'rem',
        borderBottomRightRadius: this.height/2+'rem'
      };
    },
    getpercentbar:function(){
      return {
        width:this.width+'rem',
        height:this.height+'rem',
        borderTopLeftRadius: this.height/2+'rem',
        borderBottomLeftRadius: this.height/2+'rem',
        borderTopRightRadius: this.height/2+'rem',
        borderBottomRightRadius: this.height/2+'rem',

      }
    }

  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',


    }
  }
}
</script>
<style scoped="">
  .innerbar{
    position: relative;
    width:50px;
    height:100%;

  }
  .percentbar_mask{
    /*width:200px;*/
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    flex-direction: row;
    justify-content: center;
    position:absolute;
    top:0px;
    left:0px;
    width:100%;
    height: 30px;
    height:30px;
    border-radius: 5px;
    background:-webkit-gradient(linear, center top, center bottom, from(rgba(0,0,0,0)), to(rgba(111,111,111,0.4)),color-stop(42%, rgba(0,0,0,0)));

  }
  .gap_w{
    width: 0.1rem;
  }
  .percentbar{
    /*width:200px;*/
    position:relative;


    background:-webkit-gradient(linear, center top, center bottom, from(#eac69a), to(#fef5df));

  }
  .lightbar{
    display: flex;
    position: relative;
    top:0.04rem;

    width:100%;

    height:2px;
    background:rgba(255,255,255,0.8);
    z-index: 999;
  }
  .scores{
    position: absolute;
    top:0px;
    right:-0.3rem;
    font-size: 0.32rem;
    color:#f75a26;
    font-weight: bold;
  }
</style>

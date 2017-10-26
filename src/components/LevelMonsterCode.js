const Velocity = require('velocity-animate');
export default{
  props:{
    //已经完成状态

    stateDone:{
      type:Boolean,
      default:false
    },
    //关卡是否开启
    stateOpen:{
      type:Boolean,
      default:false
    },
    showCompleteTip:true,
    yetCompleteTip:true,

    stateNew:{
      type:Boolean,
      default:false
    },
    monstersrc:{
      type:String,
      default:"#"
    },
    levelabledsrc:{
      type:String,
      default:'#'
    },
    leveldisabledsrc:{
      type:String,
      default:'#'
    },
    levelRect:{
      type:Object,
      default(){
        return {
          x:0,
          y:0,
          w:'3.32rem',
          h:'3.08rem'
        }
      }
    },
    lightPos:{
      type:Object,
      default(){
        return{
          x:0,
          y:0
        }
      }
    },
    //台的垂直距离
    levelAbledY:{
      type:String,
      default:'1.2rem'
    },
    //怪物头大小位置
    monsterRect:{
      type:Object,
      default(){
        return {
          x:'1.5rem',
          y:'0',
          w:'2.48rem',
          h:'2.18rem'
        }
      }
    }
  },
  data(){
    return{

      levelSyle:{
        left:this.levelRect.x,
        top:this.levelRect.y,
        width:this.levelRect.w,
        height:this.levelRect.h
      },
      monsterStyle:{
        left:this.monsterRect.x,
        top:this.monsterRect.y,
        width:this.monsterRect.w,
        height:this.monsterRect.h,

      },
      levelAbledStyle:{
        top:this.levelAbledY,

      },
      lightStyle:{
        left:this.lightPos.x,
        top:this.lightPos.y
      },
      showlightState:this.stateNew,


    }
  },

  computed:{
    monsterSrc(){
      return this.monstersrc
    },
    levelAbledSrc(){
      return this.levelabledsrc
    },
    levelDisabledSrc(){
      return this.leveldisabledsrc
    },
    showMonster(){
      return this.stateOpen
    },
    showLevel(){
      return !this.stateOpen
    },
    showLight(){
      if(this.stateNew){
        this.playAnime(this.$refs.monster)
      }
      return this.stateNew;
    },

  },

  methods:{
    clicklevel(){
      this.$emit("CLICK_LEVEL");
      //通过判断是否玩过此关卡，切换不同的Tip提示文字动画
      if(this.stateOpen){
          this.playModal(this.$refs.tipsModal);
      }else{
        this.playYetModal(this.$refs.tipsModalYet);

      }
    },
    playAnime(obj){
      this.$emit("PLAY_ANIME",obj);
    },
    playModal(obj){
      this.$emit("PLAY_MODAL",obj,this.stateNew);
    },
    playYetModal(obj){
      this.$emit("PLAY_YET_MODAL",obj,this.stateNew);
    }
  },
  mounted(){
    //this.playAnime(this.$refs.monster);
  }
}

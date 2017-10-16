<template>


    <svg style="position:absolute;z-index:999;border:1px solid red;left:0px;" ref="mysvg"  viewBox="0,0,1920,1080" width="100%" height="100%"  version="1.1"
  xmlns="http://www.w3.org/2000/svg">
      <!-- <g>

        <polygon  :points="getgraphics"
        style="fill:rgb(249,215,170);
        stroke:#000000;stroke-width:0"/>
      </g> -->

      <g>
        <polygon ref="innerGraphic" :points="innerGetgraphics"
        style="fill:rgba(24,222,255,0.5);
        stroke:#18a9ff;stroke-width:1"/>
      </g>
      <circle v-for="(item,index) in circlelist" :key="index" :cx="item.cx" :cy="item.cy" r="3"
       fill="#18a9ff"/>

  </svg>

</template>
<script>

  export default{
    props:{
      pointCenter:{
        type:Object,
        default:function(){

          return{
            x:647,
            y:448
          }
        }
      },
      scale:{
        type:Number,
        default:0.4
      },

      bianOuter:{
        type:Number,
        default:6
      },
      radiusOuter:{
        type:Number,
        default:165
      },
      bianInner:{
        type:Number,
        default:6
      },
      radiusInner:{
        type:Number,
        default:175
      },
      //初始化百分比分数布局点数组
      point_Array:{
        type:Array,
        default:function(){
          return [[160,200],[100,200],[100,200],[100,200],[100,200],[100,200]]
        }
      },

    },
    data:function(){
      return{
        gl_text_x:0,
        gl_text_y:0,
        circle1_x:0,
        circle1_y:100,
        circlelist:[{
          cx:0,
          cy:0
        }],
        svgText:[{
          text:'e444'
        }]

      }
    },
    computed:{


      texturegraphicsA:function(){
        let ln = this.radiusOuter*0.8
        let center_pt = {
          x:this.pointCenter.x,
          y:this.pointCenter.y
        }
        let bian = this.bianOuter;
        let _angle = 360/bian;
        let graphics_arr = [];

        for(let i=1;i<=bian;i++){
            let _bianAngle = _angle*i;
            let pt = {
              x:center_pt.x+Math.sin(_bianAngle*Math.PI/180)*ln,
              y:center_pt.y+Math.cos(_bianAngle*Math.PI/180)*ln
            }
            let format = pt.x+','+pt.y
            graphics_arr.push(format);
        }
        return graphics_arr.join(' ')
      },
      texturegraphicsB:function(){
        let ln = this.radiusOuter*0.6
        let center_pt = {
          x:this.pointCenter.x,
          y:this.pointCenter.y
        }
        let bian = this.bianOuter;
        let _angle = 360/bian;
        let graphics_arr = [];

        for(let i=1;i<=bian;i++){
            let _bianAngle = _angle*i;
            let pt = {
              x:center_pt.x+Math.sin(_bianAngle*Math.PI/180)*ln,
              y:center_pt.y+Math.cos(_bianAngle*Math.PI/180)*ln
            }
            let format = pt.x+','+pt.y
            graphics_arr.push(format);
        }
        return graphics_arr.join(' ')
      },
      texturegraphicsC:function(){
        let ln = this.radiusOuter*0.4
        let center_pt = {
          x:this.pointCenter.x,
          y:this.pointCenter.y
        }
        let bian = this.bianOuter;
        let _angle = 360/bian;
        let graphics_arr = [];

        for(let i=1;i<=bian;i++){
            let _bianAngle = _angle*i;
            let pt = {
              x:center_pt.x+Math.sin(_bianAngle*Math.PI/180)*ln,
              y:center_pt.y+Math.cos(_bianAngle*Math.PI/180)*ln
            }
            let format = pt.x+','+pt.y
            graphics_arr.push(format);
        }
        return graphics_arr.join(' ')
      },
      texturegraphicsD:function(){
        let ln = this.radiusOuter*0.2
        let center_pt = {
          x:this.pointCenter.x,
          y:this.pointCenter.y
        }
        let bian = this.bianOuter;
        let _angle = 360/bian;
        let graphics_arr = [];

        for(let i=1;i<=bian;i++){
            let _bianAngle = _angle*i;
            let pt = {
              x:center_pt.x+Math.sin(_bianAngle*Math.PI/180)*ln,
              y:center_pt.y+Math.cos(_bianAngle*Math.PI/180)*ln
            }
            let format = pt.x+','+pt.y
            graphics_arr.push(format);
        }
        return graphics_arr.join(' ')
      },
      //雷达图外部多边形点数组
      getgraphics:function(){
        const self = this;
        let ln = this.radiusOuter
        let center_pt = {
          x:this.pointCenter.x,
          y:this.pointCenter.y
        }
        let bian = this.bianOuter;
        let _angle = 360/bian;
        let graphics_arr = [];

        for(let i=1;i<=bian;i++){
            let _bianAngle = _angle*i;
            let pt = {
              x:center_pt.x+Math.sin(_bianAngle*Math.PI/180)*ln,
              y:center_pt.y+Math.cos(_bianAngle*Math.PI/180)*ln
            }
            let format = pt.x+','+pt.y;

            switch (i) {
              case 1:
              self.svgText.push({
                x:pt.x+10,
                y:pt.y,
                text:'观察能力'
              })
                break;
                case 2:
                self.svgText.push({
                  x:pt.x+10,
                  y:pt.y,
                  text:'推理能力'
                })
                  break;
                  case 3:
                  self.svgText.push({
                    x:pt.x-40,
                    y:pt.y-18,
                    text:'专注力'
                  })
                    break;
                    case 4:
                    self.svgText.push({
                      x:pt.x-105,
                      y:pt.y,
                      text:'运算能力'
                    })
                      break;
                      case 5:
                      self.svgText.push({
                        x:pt.x-105,
                        y:pt.y,
                        text:'时间管理'
                      });
                      self.gl_text_y = pt.y+30;
                      self.gl_text_x=pt.x-80;
                        break;
                        case 6:
                        self.svgText.push({
                          x:pt.x-48,
                          y:pt.y+25,
                          text:'动手能力'
                        })
                          break;
              default:

            }

            graphics_arr.push(format);
        }
        return graphics_arr.join(' ')
      },
      //雷达图的内部多边形点数组
      innerGetgraphics:function(){
        const self = this;

        let ln = this.radiusInner
        let center_pt = {
          x:this.pointCenter.x,
          y:this.pointCenter.y
        }
        let bian = this.bianInner;
        let _angle = 360/bian;

      //计算出各个点的百分比
      let percent_bian = [];
      for(let i=0;i<this.point_Array.length;i++){
          let percent = this.point_Array[i][0]/this.point_Array[i][1]
          percent_bian.push(percent)
      }
       //svg多边形绘图点数组
        let graphics_arr = [];
        for(let i=1;i<=bian;i++){
            let _bianchang = percent_bian[i-1]*ln;//得出每个百分比的数值
            let _bianAngle = _angle*i;//得出每个边对应角度
            let pt = {
              x:center_pt.x+Math.sin(_bianAngle*Math.PI/180)*_bianchang,
              y:center_pt.y+Math.cos(_bianAngle*Math.PI/180)*_bianchang
            }

            self.circlelist.push({
              cx:pt.x,
              cy:pt.y
            })


            // let dot = document.createElement('div');
            // dot.style.position = 'absolute';
            // dot.style.width = '5px';
            // dot.style.height = '5px';
            // dot.style.left =
            let format = pt.x+','+pt.y
            graphics_arr.push(format);
        }
        return graphics_arr.join(' ')
      }
    },
    mounted:function(){

    }
  }

</script>
<style scoped="">
  .container{
    position: relative;
    border:2px solid red;
    width:10rem;
    height:10rem;

  }
</style>

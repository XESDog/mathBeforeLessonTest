<template>
  <div class="container">
    <!--背景-->
    <img class="full" src="../assets/questionBg.jpg">
    <!--题目-->
    <div class="describe">{{questionContent.describe}}</div>
    <!--答题时间-->
    <div class="time">{{formattedTime}}</div>
    <!--题干-->
    <img class="stem" :src="path+'stem.png'">
    <!--选项-->
    <div class="optionContainer">
      <div class="option" v-for="index in questionContent.option">
        <!--这里value='index-1'，因为v-for以1为初始值-->
        <input type="radio"
               :id="'option'+index"
               :value="index-1"
               v-model="userAnswer"
        >
        <label :for="'option'+index">
          <img :src="getLabelImgPath(index-1)">
        </label>
      </div>
    </div>
    <button
      class="nextBtn"
      v-show="!$store.getters.complete"
      @click="submit">
    </button>
    <button v-show="$store.getters.complete"
            @click="$router.push('/histogram')"
    >查看报告
    </button>
    <div v-show="passedLevel" class="passed full">
      <div class="modal"></div>
      <div class="center">
        <img style="width: 9.85rem;" src="../assets/passed.png"/>
        <p>{{$store.getters.currentLevelName}}:{{rank}}</p>
        <button @click="toNext"></button>
      </div>
    </div>
  </div>
</template>
<script>
  export default require('./QuestionCode')

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  $fontStrokeColor: #097409;
  $globalWidth: 19.2rem;
  $globalHeight: 10.8rem;

  @mixin imgButton($prefix) {
    background: url('#{$prefix}Normal.png') no-repeat;
    background-size: cover;
    border: 0px;
    cursor: pointer;
    &:hover {
      background: url('#{$prefix}Over.png') no-repeat;
      background-size: cover;
    }
    &:active {
      background: url('#{$prefix}Down.png') no-repeat;
      background-size: cover;
    }
    outline: none;
  }

  .container {
    height: 100%;
  }

  .center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .full {
    left: 0px;
    top: 0px;
    width: $globalWidth;
    height: $globalHeight;
  }

  .passed {
    position: absolute;
    color: white;
    /*下一关按钮*/
    button {
      position: absolute;
      left: 48%;
      transform: translate(-50%);
      bottom: 1rem;
      width: 2.21rem;
      height: 0.89rem;
      @include imgButton('../assets/nextLevel')
    }
    .modal {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.8);
    }
    p{
      left: 42%;
      color: black;
      transform: translate(-50%);
      bottom: 1.8rem;
      font-size:0.6rem;
      position: absolute;
    }
  }

  .nextBtn {
    bottom: 0.9rem;
    right: 0.6rem;
    position: absolute;
    width: 2rem;
    height: 0.8rem;

    @include imgButton('../assets/nextQuestion')
  }

  .describe {
    font-size: 0.4rem;
    color: white;
    text-align: center;
    position: absolute;
    left: 3rem;
    top: 0.25rem;
  }

  .time {
    color: white;
    font-size: 0.4rem;
    position: absolute;
    right: 2.6rem;
    top: 0.25rem
  }

  .stem {
    position: absolute;
    width: 11rem;
    left: 4rem;
    top: 1.6rem;
  }

  .optionContainer {
    display: flex;
    justify-content: center;
    bottom: 0.4rem;
    position: absolute;
    width: $globalWidth;

    .option {
      margin: 0 0.5rem;
      img {
        width: 3.32rem;
      }
     /* p {
        color: rgb(255, 255, 255);
        position: absolute;
        bottom: 0.4rem;
        font-size: 1.8rem;
        margin: 0px auto;
        width: 3.2rem;
        text-shadow: 1px 0 10px $fontStrokeColor, 0 1px 10px $fontStrokeColor,
        0 -1px 10px $fontStrokeColor, -1px 0 10px $fontStrokeColor;

      }*/
      input {
        display: none;
      }
      label {
        cursor: pointer;
      }
    }
  }
</style>


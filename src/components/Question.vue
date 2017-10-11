<template>
  <div class="container">
    <!--背景-->
    <img class="bg" :src="path+'bg.png'">
    <!--题目-->
    <div class="describe">{{questionContent.describe}}</div>
    <!--答题时间-->
    <div class="time">{{formattedTime}}</div>
    <!--题干-->
    <img class="stem" :src="path+'stem.png'">
    <!--选项-->
    <div class="optionContainer">
      <div class="option" v-for="index in questionContent.option">
        <input type="checkbox"
               :id="'option'+index"
               :value="index"
               v-model="userAnswer"
        >
        <label :for="'option'+index">
          <img :src="path+'option_'+(index-1)+'.png'">
        </label>
      </div>
    </div>
    <div
      class="nextBtn"
      v-show="!$store.getters.complete"
      @click="submit">
      <img src="../assets/nextBtn.png" style="width: 2rem">
    </div>
    <button v-show="$store.getters.complete"
            @click="$router.push('/histogram')"
    >查看报告
    </button>
    <div v-show="passedLevel" class="passed">
      <p>恭喜通关</p>
      <button @click="toNext">下一关</button>
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
  .container {
    height: 100%;
  }

  .bg {
    width: $globalWidth;
    height: $globalHeight;
  }
  .passed{
    color: white;
    button{
      position: static;
    }
  }

  .nextBtn {
    bottom: 0.9rem;
    right: 0.6rem;
    position: absolute;

    &:hover {
      cursor: pointer;
    }
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
    width: 9.38rem;
    height: 5.05rem;
    left: 5rem;
    top: 1.6rem;
  }

  .optionContainer {
    display: flex;
    justify-content: center;
    bottom: 1rem;
    position: absolute;
    width: $globalWidth;

    .option {
      margin: 0 0.5rem;
      img {
        width: 3.32rem;
      }
      p {
        color: rgb(255, 255, 255);
        position: absolute;
        bottom: 0.4rem;
        font-size: 1.8rem;
        margin: 0px auto;
        width: 3.2rem;
        text-shadow: 1px 0 10px $fontStrokeColor, 0 1px 10px $fontStrokeColor,
        0 -1px 10px $fontStrokeColor, -1px 0 10px $fontStrokeColor;

      }
      input {
        display: none;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>


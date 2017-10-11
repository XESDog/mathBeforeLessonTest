const _ = require('lodash');
const dateFormat = require('dateformat');
let time;

export default {
  data() {
    return {
      userAnswer: [],
      passedTime: 0,
      passedLevel: false,
    }
  },
  computed: {
    questionContent: {
      get() {
        return this.$store.getters.currentQuestionContent;
      }
    },
    path: {
      get() {
        return this.$store.getters.staticPath;
      }
    },
    lastQuestion: {
      get() {
        return this.$store.getters.lastQuestion;
      }
    },
    formattedTime: {
      get() {
        if (this.passedTime === 0) return '00:00';
        return dateFormat(this.passedTime * 1000, 'MM:ss');
      }
    }
  },
  methods: {
    /**
     * 提交和下一题的分开的两个步骤
     * 1. 如果不是当前关卡最后一题，提交和下一题同步执行
     * 2. 如果是当前关卡最后一题，先提交，弹出"恭喜过关"面板，在该面板上点击"下一题"按钮，触发下一题
     */
    submit() {
      this.$store.dispatch('submit', this.userAnswer)
      this.userAnswer = [];
      if (this.lastQuestion) {
        this.passedLevel = true;
      } else {
        this.toNext();
      }
    },
    toNext() {
      this.passedLevel = false;
      this.passedTime = 0;
      this.$store.dispatch('toNext')

    },
  },
  mounted() {
    time = setInterval(() => {
      this.passedTime++;
      if (this.passedTime >= this.$store.getters.answerTime) {
        this.toNext();
      }
    }, 1000);
  },
  destroyed() {
    if (time) {
      clearInterval(time)
    }
  }
}

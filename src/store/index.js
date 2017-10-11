import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
// import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

const config = require('../config.json');

const state = {
  levels: config.levels.concat(),
  currentLevel: 0,
  totalLevel: config.levels.length,//当前关卡总数
  currentQuestion: 0,
  totalQuestion: config.levels[0].questions.length,//当前关卡问题总数
  /**
   * 用户答题情况,二维数组表示
   * [[answer,answer],[answer]]
   *
   */
  userAnswers: [],
  answerTime:config.answerTime,//每道题的答题时间，超过则直接下一道题
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  // plugins: [createLogger()]
})


export default store

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
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  // plugins: [createLogger()]
})


export default store

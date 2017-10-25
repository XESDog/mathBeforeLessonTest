const _ = require('lodash');


export const toNextLevel = ({dispatch, commit, state}) => {
  commit('nextLevel')
}
export const toNextQuestion = ({commit}) => {
  commit('nextQuestion');
}
/**
 * 每题的答案提交
 * @param commit
 * @param state
 * @param getters
 * @param answer
 */
export const submit = ({commit, state, getters}, answer) => {
  commit('submitUserAnswer', answer)
}
/**
 * 下一步，当前关卡题目完成，自动跳到下一关，直到全部题目完成
 * @param dispatch
 * @param commit
 * @param state
 */
export const toNext = ({dispatch, commit, state}) => {
  if (state.currentLevel === state.totalLevel - 1) {
    if (state.currentQuestion === state.totalQuestion - 1) {
      //全部完成
    //  alert('all is done')
    } else {
      dispatch('toNextQuestion');
    }
  } else {
    if (state.currentQuestion === state.totalQuestion - 1) {
      dispatch('toNextLevel');
    } else {
      dispatch('toNextQuestion');
    }

  }
}

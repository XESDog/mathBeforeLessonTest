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
 * @param userAnswer
 */
export const submit = ({commit, state}, userAnswer) => {

  let level = state.currentLevel
  let question = state.currentQuestion
  let userAnswers = state.userAnswers;

  if (!userAnswers[level]) {
    userAnswers[level] = [];
  }
  userAnswers[level][question] = userAnswer;

}
/**
 * 下一步，当前关卡题目完成，自动跳到下一关，知道全部题目完成
 * @param dispatch
 * @param commit
 * @param state
 */
export const toNext = ({dispatch, commit, state}) => {
  if (state.currentLevel === state.totalLevel - 1) {
    if (state.currentQuestion === state.totalQuestion - 1) {
      //全部完成
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
/**
 * 检测当前回答是否正确
 * @param state
 * @param userAnswer
 * @return {boolean|*}
 */
export const check = ({state}, userAnswer) => {
  //当前问题的正确答案
  const correct = state.levels[state.currentLevel].questions[state.currentQuestion].answerIndex.concat();
  const result = _.difference(correct, userAnswer);
  return !result || (_.isArray(result) && result.length === 0)

}



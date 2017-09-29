const _ = require('lodash');


export const toNextLevel = ({dispatch, commit, state}) => {
  commit('nextLevel')
}
export const toNextQuestion = ({commit}) => {
  commit('nextQuestion');
}
/**
 * 下一步，当前关卡题目完成，自动跳到下一关，知道全部题目完成
 * @param dispatch
 * @param commit
 * @param state
 */
export const toNext = ({dispatch,commit,state}) => {
  if(state.currentLevel===state.totalLevel-1){
    if(state.currentQuestion===state.totalQuestion-1){
      //全部完成
    }else{
      dispatch('toNextQuestion');
    }
  }else{
    if(state.currentQuestion===state.totalQuestion-1){
      dispatch('toNextLevel');
    }else{
      dispatch('toNextQuestion');
    }
  }
}
/**
 * 检测当前回答是否正确
 * @param state
 * @param userAnswers
 * @return {boolean|*}
 */
export const check = ({state}, userAnswers) => {
  //当前问题的正确答案
  const correct = state.levels[state.currentLevel].questions[state.currentQuestion].answerIndex.concat();
  const result = _.difference(correct, userAnswers);
  return !result || (_.isArray(result) && result.length === 0)

}



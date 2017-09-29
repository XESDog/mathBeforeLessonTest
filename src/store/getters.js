/**
 * 获取当前question
 * @param state
 */
export const currentQuestionContent = state => {
  const level = state.levels[state.currentLevel];
  const questions = level.questions;

  return questions[state.currentQuestion];
}

/**
 * 全部完成
 * @param state
 * @return {boolean}
 */
export const complete=state=>{
  return state.totalLevel - 1 === state.currentLevel && state.totalQuestion - 1 === state.currentQuestion;
}

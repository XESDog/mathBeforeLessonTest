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
export const complete = state => {
  return state.totalLevel - 1 === state.currentLevel && state.totalQuestion - 1 === state.currentQuestion;
}
export const answerTime = state => {
  return state.answerTime;
}
/**
 * 静态文件地址
 * @param state
 * @return {string}
 */
export const staticPath = state => {
  return 'static/level_' + state.currentLevel + '/question_' + state.currentQuestion + '/';
}
/**
 * 是否当前关卡的最后一个问题
 * @param state
 * @return {boolean}
 */
export const currentLevelLastQuestion = state => {
  return state.totalQuestion - 1 === state.currentQuestion;
}
/**
 * 最后一个问题
 * @param state
 * @return {boolean}
 */
export const lastQuestion = state => {
  return state.totalLevel - 1 === state.currentLevel && state.totalQuestion - 1 === state.currentLevel
}

export const currentLevelName = state => {
  return state.levels[state.currentLevel].name
}
export const currentLevelRank = state => {
  return state.levelRanks[state.currentLevel];
}


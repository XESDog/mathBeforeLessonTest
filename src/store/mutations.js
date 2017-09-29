/**
 * 将currentLevel指向下一关，初始化下一关question相关数据
 * @param state
 */
export const nextLevel = state => {
  if (state.currentLevel + 1 >= state.totalLevel) {
    return;
  }

  state.currentLevel++;
  state.currentQuestion = 0;

  // const level = state.levels[state.currentLevel];
  // const questions = level.questions;

  // state.totalQuestion = questions.length;
}

export const nextQuestion = state => {

  if (state.currentQuestion + 1 >= state.totalQuestion) {
    return;
  }
  state.currentQuestion++;
}

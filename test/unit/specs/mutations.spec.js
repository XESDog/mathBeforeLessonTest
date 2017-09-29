import {nextLevel, nextQuestion} from "../../../src/store/mutations";
import store from "../../../src/store"


const _ = require('lodash');

describe('mutations', () => {
  it('nextLevel', () => {
    const state=_.clone(store.state);
    nextLevel(state);
    expect(state.currentLevel).to.equal(1);
  })
  it('nextQuestion',()=>{
    const state=_.clone(store.state);
    nextQuestion(state);
    expect(state.currentQuestion).to.equal(1);
  })
})

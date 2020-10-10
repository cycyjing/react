import * as actionType from '../actions/actionType';
import QUESTIONCONFIG from '../../questionConfig'
const initState = {
  initData: {},
  q1Answer: "",
  q2Answer: "",
  q3Answer: "",
  q4Answer: [],
  q5Answer: 0,
  correct: 0
}
// let q1Answer = ""
// let q2Answer = ""
// let q3Answer = ""
// let q4Answer = []
// let q5Answer = ""
// let correct = 0

const checkAnswer = (state) => {
  let count = 0
  for (let key in QUESTIONCONFIG) {
    if (typeof QUESTIONCONFIG[key]["answer"] === "string" ||
      typeof QUESTIONCONFIG[key]["answer"] === "number") {
      if (QUESTIONCONFIG[key]["answer"] === state[`${key}Answer`] + "") {
        count++
      }
    } else {
      if (QUESTIONCONFIG[key]["answer"].sort().join() === state[`${key}Answer`].sort().join()) {
        count++
      }
    }
  }
  return count
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionType.INIT_DATA:
      return Object.assign(state, action.payload)
    case actionType.CHANGED_Q1:
    case actionType.CHANGED_Q2:
    case actionType.CHANGED_Q3:
    case actionType.CHANGED_Q4:
    case actionType.CHANGED_Q5:
      return Object.assign(state, action.payload)
    case actionType.CONFIRM_QS:
      let confirmState = Object.assign(state, action.payload)
      let correct = checkAnswer(confirmState)
      return Object.assign(confirmState, { correct })
    default:
      return state;
  }
}
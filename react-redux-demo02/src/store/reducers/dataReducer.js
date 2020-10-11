import * as actionType from '../actions/actionType'

const initState = {
  barChartData: {}
}

export default (state = initState, { payload, type }) => {
  switch (type) {
    case actionType.BAR_CHART_DATA:
      return Object.assign(state, payload)

    default:
      return state;
  }
}
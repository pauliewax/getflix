import { RECEIVE_SERIES } from '../actions/series_actions';

const seriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SERIES:
      return Object.assign({}, state, action.series);
    default:
      return state;
  }
};

export default seriesReducer;

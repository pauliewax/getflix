import { RECEIVE_SERIE, RECEIVE_SERIES } from '../actions/series_actions';

const seriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SERIE:
      return Object.assign({}, state, { seriesDetail: action.serie });
    case RECEIVE_SERIES:
      return Object.assign({}, state, { seriesList: action.series});
    default:
      return state;
  }
};

export default seriesReducer;

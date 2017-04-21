import * as APIUtil from '../util/series_api_util';

export const RECEIVE_SERIES = 'RECEIVE_SERIES';

export const receiveSeries = (series) => {
  return  {
    type: RECEIVE_SERIES,
    series
  };
};

export const fetchSeries = (id) => (dispatch) => {
  return APIUtil.fetchSeries(id).then((series)=>dispatch(receiveSeries(series)));
};

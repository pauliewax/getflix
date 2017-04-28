import * as APIUtil from '../util/series_api_util';

export const RECEIVE_SERIE = 'RECEIVE_SERIE';
export const RECEIVE_SERIES = 'RECEIVE_SERIES';

export const receiveSerie = (serie) => {
  return  {
    type: RECEIVE_SERIE,
    serie
  };
};

export const receiveSeries = (series) => {
  return  {
    type: RECEIVE_SERIES,
    series
  };
};

export const fetchSearch = (searchQuery) => (dispatch) => {
  return APIUtil.fetchSearch(searchQuery).then((series)=>dispatch(receiveSeries(series)));
};

export const fetchSerie = (id) => (dispatch) => {
  return APIUtil.fetchSerie(id).then((serie)=>dispatch(receiveSerie(serie)));
};

export const fetchSeries = (genreId) => (dispatch) => {
  return APIUtil.fetchSeries(genreId).then((series)=>dispatch(receiveSeries(series)));
};

export const fetchAllSeries = () => (dispatch) => {
  return APIUtil.fetchAllSeries().then((series)=>dispatch(receiveSeries(series)));
};

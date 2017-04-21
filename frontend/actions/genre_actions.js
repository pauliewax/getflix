import * as APIUtil from '../util/genre_api_util';

export const RECEIVE_GENRE = 'RECEIVE_GENRE';

export const receiveGenre = (genre) => {
  return  {
    type: RECEIVE_GENRE,
    genre
  };
};

export const fetchGenre = (id) => (dispatch) => {
  return APIUtil.fetchGenre(id).then((genre)=>dispatch(receiveGenre(genre)));
};

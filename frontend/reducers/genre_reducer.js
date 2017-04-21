import { RECEIVE_GENRE } from '../actions/genre_actions';

const genreReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GENRE:
      return Object.assign({}, state, action.genre);
    default:
      return state;
  }
};

export default genreReducer;

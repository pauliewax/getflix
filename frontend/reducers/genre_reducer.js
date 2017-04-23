import { RECEIVE_GENRES } from '../actions/genre_actions';

const genreReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GENRES:
      return Object.assign([], state, action.genres);
    default:
      return state;
  }
};

export default genreReducer;

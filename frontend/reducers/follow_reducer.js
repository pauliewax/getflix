import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

const followReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLLOW:
      return Object.assign({}, state, {[action.follow.id]: action.follow});
    case REMOVE_FOLLOW:
      let newState = Object.assign({}, state);
      delete newState[action.follow.id];
      return newState;
    default:
      return state;
  }
};

export default followReducer;

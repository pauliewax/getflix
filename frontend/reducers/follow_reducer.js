import { RECEIVE_FOLLOW } from '../actions/follow_actions';

const followReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLLOW:
      return Object.assign({}, state, {[action.follow.id]: action.follow});
    default:
      return state;
  }
};

export default followReducer;

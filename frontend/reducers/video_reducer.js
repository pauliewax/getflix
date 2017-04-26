import { RECEIVE_VIDEOS } from '../actions/video_actions';

const videoReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return Object.assign([], state, action.videos);
    default:
      return state;
  }
};

export default videoReducer;

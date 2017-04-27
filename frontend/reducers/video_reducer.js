import { RECEIVE_VIDEOS, RECEIVE_VIDEO } from '../actions/video_actions';

const videoReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEO:
      return(Object.assign({}, { videoDetail: action.video}));
    case RECEIVE_VIDEOS:
      return Object.assign({}, { videoList: action.videos});
    default:
      return state;
  }
};

export default videoReducer;

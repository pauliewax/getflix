import * as APIUtil from '../util/video_api_util';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';

export const receiveVideos = (videos) => {
  return  {
    type: RECEIVE_VIDEOS,
    videos
  };
};

export const fetchBySeries = (seriesId) => (dispatch) => {
  return APIUtil.fetchBySeries(seriesId).then((videos)=>dispatch(receiveVideos(videos)));
};

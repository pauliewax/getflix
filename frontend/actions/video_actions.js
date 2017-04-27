import * as APIUtil from '../util/video_api_util';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';

export const receiveVideo = (video) => {
  return  {
    type: RECEIVE_VIDEO,
    video
  };
};

export const receiveVideos = (videos) => {
  return  {
    type: RECEIVE_VIDEOS,
    videos
  };
};

export const fetchVideo = (id) => (dispatch) => {
  return APIUtil.fetchVideo(id).then((video)=>dispatch(receiveVideo(video)));
};


export const fetchBySeries = (seriesId) => (dispatch) => {
  return APIUtil.fetchBySeries(seriesId).then((videos)=>dispatch(receiveVideos(videos)));
};

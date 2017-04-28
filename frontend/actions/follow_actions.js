import * as APIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

export const receiveFollow = (follow) => {
  return  {
    type: RECEIVE_FOLLOW,
    follow
  };
};

export const receiveFollows = (follows) => {
  return  {
    type: RECEIVE_FOLLOWS,
    follows
  };
};

export const removeFollow = (follow) => {
  return  {
    type: REMOVE_FOLLOW,
    follow
  };
};

export const fetchFollows = () => (dispatch) => {
  return APIUtil.fetchFollows().then((follows)=>dispatch(receiveFollows(follows)));
};

export const createFollow = (follow) => (dispatch) => {
  return APIUtil.createFollow(follow).then((follow)=>dispatch(receiveFollow(follow)));
};

export const deleteFollow = (followId) => (dispatch) => {
  return APIUtil.deleteFollow(followId).then((follow)=>dispatch(removeFollow(follow)));
};

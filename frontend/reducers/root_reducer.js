import { combineReducers } from 'redux';
import session from './session_reducer';
import genre from './genre_reducer';
import series from './series_reducer';
import videos from './video_reducer';
import follows from './follow_reducer';

export default combineReducers({ session, genre, series, videos, follows });

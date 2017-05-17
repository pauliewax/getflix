import rootReducer from "../reducers/root_reducer";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const configureStore = function (preloadedState = {}) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  );
};

// removed logger from applyMiddleware for production

export default configureStore;

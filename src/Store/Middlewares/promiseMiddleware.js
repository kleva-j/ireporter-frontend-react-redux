/* eslint-disable no-param-reassign */
import {
  ASYNC_START,
  ASYNC_END,
} from '../Constant/actionTypes';

const isPromise = payload => payload && typeof payload.then === 'function';

const promiseMiddleware = store => next => (action) => {
  if (isPromise(action.payload)) {
    store.dispatch({ type: ASYNC_START, subtype: action.type });
    action.payload.then(
      (res) => {
        action.payload = res;
        store.dispatch({ type: ASYNC_END, promise: action.payload });
        store.dispatch(action);
        if (action.callback) action.callback();
      },
      (error) => {
        action.error = true;
        const networkFailureError = 'Error occured, please check your internet connection.';
        action.payload = error.response ? error.response.body : { error: networkFailureError };
        store.dispatch({ type: ASYNC_END, promise: action.payload });
        store.dispatch(action);
      },
    );

    return;
  }
  next(action);
};

export default promiseMiddleware;

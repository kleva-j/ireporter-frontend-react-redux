import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import reducers from './reducers';

const getMiddlewares = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(thunk);
  }
  return applyMiddleware(thunk, logger);
};

export default createStore(reducers,
  composeWithDevTools(getMiddlewares()));

import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import reducers from './Reducers';
import localStorageMiddleware from './Middlewares/localStorage';
import promiseMiiddleware from './Middlewares/promiseMiddleware';

export const history = createHistory();

const myRouterMiddleware = routerMiddleware(history);

const getMiddlewares = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(myRouterMiddleware, promiseMiiddleware, localStorageMiddleware);
  }
  return applyMiddleware(myRouterMiddleware, promiseMiiddleware, localStorageMiddleware, logger);
};

export const store = createStore(reducers,
  composeWithDevTools(getMiddlewares()));

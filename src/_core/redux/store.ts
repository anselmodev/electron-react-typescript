import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducerPages }  from './reducers/page.reducer';

const reducers = combineReducers({
    pageSection: reducerPages
  })


export const store = createStore(
    reducers,
    applyMiddleware(
      logger, 
      thunk
      )
  );
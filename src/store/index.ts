import { createStore, combineReducers } from 'redux';
import { reducer as todoReducer } from './todo/reducer';

const reducers = combineReducers( {
  app: todoReducer
} );

export type IAppState = ReturnType<typeof reducers>;

export const store = createStore( reducers );

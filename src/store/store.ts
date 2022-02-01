import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import {reducer as messages} from './message-reducer';
import {reducer as user} from './user-reducer';

export const initStore = () => {
  const {dispatch,getState,replaceReducer,subscribe} = createStore(
    combineReducers(
      {
        messages,
        user
      }
    ),
    applyMiddleware(thunk)
  );
  return {
    dispatch: dispatch as ThunkDispatch<ReturnType<typeof getState>, void, AnyAction>,
    getState,
    replaceReducer,
    subscribe
  };
};

export type RootState = ReturnType<ReturnType<(typeof initStore)>['getState']>;

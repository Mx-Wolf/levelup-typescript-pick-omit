import { AnyAction, Dispatch } from 'redux';
import { makeDateTime, Message } from '../i-face-message';
import { postMessage, readMessage } from './actions';
import { RootState } from './store';

let lastId = 0;

const now = ()=> makeDateTime(new Date().toISOString());

export const registerMessage = (
  message:Pick<Message,'to'|'body'>,
)=>(
  dispatch:Dispatch<AnyAction>,
  getState: ()=>RootState,
)=>dispatch(postMessage({
  ...message,
  created: now(),
  from: getState().user,
  id: `message-${++lastId}`,
  posted: now(),
}));

export const markAsRead = (
  message: Pick<Message,'id'>
)=>(
  dispatch:Dispatch
)=>dispatch(readMessage({...message, read: now()}));

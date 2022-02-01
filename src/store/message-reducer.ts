import { Message } from '../i-face-message';
import { DELETE_CONVERSATION, DELETE_MESSAGE, MessageActions, POST_MESSAGE, READ_MESSAGE } from './actions';
const initialState:Message[] = [];
export const reducer = (state=initialState, action: MessageActions):Message[] => {
  switch(action.type){
    case POST_MESSAGE:{
      return [...state, action.payload];
    }
    case DELETE_MESSAGE:{
      return state.filter((message)=>message.id !== action.payload.id);
    }
    case READ_MESSAGE:{
      return state.map((message)=>message.id === action.payload.id?({...message, read:action.payload.read}):(message));
    }
    case DELETE_CONVERSATION:{
      return state.filter((message)=>message.to !== action.payload.to);
    }
  }
  return state;
};

import { Message, UserId } from '../i-face-message';

export const POST_MESSAGE = 'POST_MESSAGE';
export const READ_MESSAGE = 'READ_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const DELETE_CONVERSATION = 'DELETE_CONVERSATION';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';


export const postMessage = (payload: Omit<Message, 'read'>) => ({ type: POST_MESSAGE, payload } as const);
export const readMessage = (payload: Pick<Message, 'id' | 'read'>) => ({ type: READ_MESSAGE, payload } as const);
export const deleteMessage = (payload: Pick<Message, 'id'>) => ({ type: DELETE_MESSAGE, payload } as const);
export const deleteConversation = (payload: Pick<Message, 'to'>) => ({ type: DELETE_CONVERSATION, payload } as const);

export type MessageActions =
  | ReturnType<typeof postMessage>
  | ReturnType<typeof readMessage>
  | ReturnType<typeof deleteMessage>
  | ReturnType<typeof deleteConversation>

export const loginUser = (payload: UserId) => ({ type: USER_LOGIN, payload } as const);

export type UserActions = ReturnType<typeof loginUser>;

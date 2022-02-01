import { makeUserId } from '../i-face-message';
import { UserActions, USER_LOGIN } from './actions';

const anonymous = makeUserId('');

export const reducer = (state = anonymous, action: UserActions) => {
  switch (action.type) {
    case USER_LOGIN: {
      return action.payload;
    }
  }
  return state;
};

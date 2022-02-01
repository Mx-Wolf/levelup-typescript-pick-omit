import { expect } from 'chai';
import { makeUserId } from '../i-face-message';
import { loginUser } from './actions';
import { initStore } from './store';
import { registerMessage } from './register-message';
describe('поведение хранилища', () => {
  it('регистрирует пользователя', () => {
    const testUserName = 'test';
    const { dispatch, getState } = initStore();
    dispatch(loginUser(makeUserId(testUserName)));
    const { user } = getState();
    expect(user).eq(testUserName);
  });
  it('Посылает сообщение', () => {
    const testUserName = 'test';
    const testMessage = 'test Message';
    const otherUser = 'other';
    const { dispatch, getState } = initStore();
    dispatch(loginUser(makeUserId(testUserName)));
    dispatch(registerMessage({ body: testMessage, to: makeUserId(otherUser) }));
    const {messages} = getState();
    expect(messages.length).eq(1);
  });
});

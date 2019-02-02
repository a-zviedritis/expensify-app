import authReducer from '../../reducers/auth';

test('should setup default login values', () => {
  const state = authReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual({});
});

test('should set user ID upon login', () => {
  const uid = '123';
  const action = {
    type: 'LOGIN',
    uid
  };

  const state = authReducer({}, action);

  expect(state).toEqual({
    uid
  });
});

test('should clear user ID upon logout', () => {
  const uid = '123';
  const action = {
    type: 'LOGOUT'
  };

  const state = authReducer({ uid }, action);

  expect(state).toEqual({});
});
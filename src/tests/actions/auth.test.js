import { login, logout } from '../../actions/auth';

test('should setup LOGIN action object', () => {
  const action = login('abc');

  expect(action).toEqual({
    type: 'LOGIN',
    uid: 'abc'
  });
});

test('should setup LOGOUT action object', () => {
  const action = logout();

  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
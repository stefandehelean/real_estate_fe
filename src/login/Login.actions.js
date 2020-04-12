import { loginConstants } from './Login.constants';
import { history } from '../utils/_History';
import loginService  from './Login.service';

const loginActions = {
  login,
  logout,
  loginFB
};

function login(email, password) {
  return dispatch => {
    dispatch(request({ email }));
    loginService.login(email, password)
      .then(
        user => {
          dispatch(success(user));
          history.push('/');
        },
        error => {
          dispatch(failure(error.toString()));
          history.push('/');
        }
      );
  };

  function request(user) { return { type: loginConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: loginConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: loginConstants.LOGIN_FAILURE, error } }
}

function logout() {
  loginService.logout();
  return { type: loginConstants.LOGOUT };
}

function loginFB(code) {
  return dispatch => {
    dispatch(request({ code }));
    loginService.loginFB(code)
      .then(
        user => {
          dispatch(success(user));
          history.push('/');
        },
        error => {
          dispatch(failure(error.toString()));
          history.push('/');
        }
      );
  };

  function request(user) { return { type: loginConstants.LOGIN_FB_REQUEST, user } }
  function success(user) { return { type: loginConstants.LOGIN_FB_SUCCESS, user } }
  function failure(error) { return { type: loginConstants.LOGIN_FB_FAILURE, error } }
}

export default loginActions;
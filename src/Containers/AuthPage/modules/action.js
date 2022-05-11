import * as ActionType from './constants';
import UserService from '../../../services/user';

const userService = new UserService();

export const actSignInApi = (user) => {
  return (dispatch) => {
    dispatch(actSignInRequest());
    userService
      .signIn(user)
      .then((result) => {
        dispatch(actSignInSuccess(result.data));
        localStorage.setItem('userLogin', JSON.stringify(result.data));
      })
      .catch((err) => {
        dispatch(actSignInFailed(err));
      });
  };
};

const actSignInRequest = () => {
  return {
    type: ActionType.SIGN_IN_REQUEST,
  };
};

const actSignInSuccess = (data) => {
  return {
    type: ActionType.SIGN_IN_SUCCESS,
    payload: data,
  };
};

const actSignInFailed = (err) => {
  return {
    type: ActionType.SIGN_IN_FAILED,
    payload: err,
  };
};

export const getAccountInfo = (user, data) => {
  return (dispatch) => {
    userService
      .fetchAccountInfo(user.accessToken, data)
      .then((res) => {
        dispatch({
          type: ActionType.GET_ACCOUNT_INFO,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

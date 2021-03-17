import { adminService } from "./../../../../Services";
import * as ActionType from "./../constants";
export const actGetAccountsTypeApi = (keyword) => {
  return (dispatch) => {
    dispatch(actGetAccountsTypeRequest());
    adminService
      .fetchAccountTypes(keyword)
      .then((result) => {
        console.log(result);
        dispatch(actGetAccountsTypeSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actGetAccountsTypeFailed(err));
      });
  };
};

const actGetAccountsTypeRequest = () => {
  return {
    type: ActionType.GET_ACCOUNTS_TYPE_REQUEST,
  };
};

const actGetAccountsTypeSuccess = (data) => {
  return {
    type: ActionType.GET_ACCOUNTS_TYPE_SUCCESS,
    payload: data,
  };
};

const actGetAccountsTypeFailed = (err) => {
  return {
    type: ActionType.GET_ACCOUNTS_TYPE_FAILED,
    payload: err,
  };
};

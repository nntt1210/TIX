import { adminService } from "./../../../../Services";
import * as ActionType from "./../constants";

export const actGetAccountsApi = (keyword) => {
  return (dispatch) => {
    dispatch(actGetAccountsRequest());
    adminService
      .fetchAccounts(keyword)
      .then((result) => {
        dispatch(actGetAccountsSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actGetAccountsFailed(err));
      });
  };
};

const actGetAccountsRequest = () => {
  return {
    type: ActionType.FETCH_ACCOUNTS_REQUEST,
  };
};

const actGetAccountsSuccess = (data) => {
  return {
    type: ActionType.FETCH_ACCOUNTS_SUCCESS,
    payload: data,
  };
};

const actGetAccountsFailed = (err) => {
  return {
    type: ActionType.FETCH_ACCOUNTS_REQUEST,
    payload: err,
  };
};

export const actAddUser = (data, token) => {
  return (dispatch) => {
    adminService
      .addUser(data, token)
      .then((result) => {
        alert("Thêm người dùng thành công");
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
};

export const actEditUser = (data, token) => {
  return (dispatch) => {
    adminService
      .editUser(data, token)
      .then((res) => {
        alert("Câp nhật người dùng thành công");
        window.location.reload(false);
      })
      .catch((err) => alert(err.response.data));
  };
};

export const actDeleteUser = (idUser, token) => {
  return (dispatch) => {
    adminService
      .deleteUser(idUser, token)
      .then((res) => {
        alert("Xoá người dùng thành công");
        console.log(res.data);
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
};

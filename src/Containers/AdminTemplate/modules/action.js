import { adminService } from "./../../../Services";
import * as ActionType from "./constants";

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

export const actGetAccountsTypeApi = (keyword) => {
  return (dispatch) => {
    dispatch(actGetAccountsTypeRequest());
    adminService
      .fetchAccountTypes(keyword)
      .then((result) => {
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

export const actAddMovie = (data, poster, token) => {
  return (dispatch) => {
    adminService
      .addMovie(data, token)
      .then((res) => {
        alert("Thêm phim thành công");
        upLoadPoster(createFormData(poster, data.tenPhim, data.maNhom));
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
};

export const actDeleteMovie = (idMovie, token) => {
  return (dispatch) => {
    adminService
      .deleteMovie(idMovie, token)
      .then((res) => {
        alert("Xoá phim thành công");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data);
      });
  };
};

export const actEditMovie = (data, poster, token) => {
  return (dispatch) => {
    adminService
      .editMovie(data, token)
      .then((res) => {
        alert("Cập nhật phim thành công");
        upLoadPoster(createFormData(poster, data.tenPhim, data.maNhom));
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
};

const createFormData = (file, tenPhim, maNhom) => {
  let formData = new FormData();

  if (file != null) {
    formData.append("poster", file, file.name);
    formData.append("tenphim", tenPhim);
    formData.append("manhom", maNhom);
  }

  return formData;
};

export const upLoadPoster = (data) => {
  adminService
    .upLoadPoster(data)
    .then((res) => {
      window.location.reload(false);
    })
    .catch((err) => {
      alert(err.response.data);
    });
};

export const actAddShowTime = (data, token) => {
  return (dispatch) => {
    adminService
      .addShowTime(data, token)
      .then((res) => {
        alert("Thêm lịch chiếu thành công");
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err.response);
        console.log(err.response);
      });
  };
};

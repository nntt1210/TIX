import api from "../../../../../api/index";
import *as ActionTypes from "./constants";


export const actAddUserApi = (user) => {
    // let accessToken = '';
    // if (localStorage.getItem('UserAdmin')) {
    //     accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    // }
    return (dispatch) => {
        dispatch(actAddUserRequest());
        api.post('/api/QuanLyNguoiDung/DangKy', user)
            .then((result) => {
                dispatch(actAddUserSuccess(result.data));
                //save in local storage
                localStorage.setItem("UserAuthenticated", JSON.stringify(result.data));
                // history.replace('/login');
            })
            .catch((err) => {
                dispatch(actAddUserFailure(err));
            })
    }

}
const actAddUserRequest = () => {
    return {
        type: ActionTypes.ADD_USER_REQUEST,
    }
}
const actAddUserSuccess = (user) => {
    return {
        type: ActionTypes.ADD_USER_SUCCESS,
        payload: user,
    }
}
const actAddUserFailure = (err) => {
    return {
        type: ActionTypes.ADD_USER_FAILED,
        payload: err,
    }
}
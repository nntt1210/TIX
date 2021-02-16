import api from "../../../../../api/index";
import *as ActionTypes from "./constants";
import setHeaders from "../../../../../utils/setHeaders";

const TIME_OUT = 3600000;
export const actAuthApi = (user, history) => {
    return (dispatch) => {
        dispatch(actAuthRequest());
        console.log("actAuthApi");
        api
            .post(`/api/QuanLyNguoiDung/DangNhap`, user)
            .then((result) => {
                console.log("actAuthApi", result.data);
                dispatch(actAuthSuccess(result.data));

                //handle result login
                if (result.data.maLoaiNguoiDung === "KhachHang") {
                    //setHeader
                    setHeaders(result.data.accessToken);

                    //save in local storage
                    localStorage.setItem("UserAuthenticated", JSON.stringify(result.data));
                    history.replace('/login');

                    //handle phien lam viec sau 5' tu dong sign out
                    const date = new Date().getTime();
                    const exp = date + TIME_OUT;
                    localStorage.setItem('Exp', exp);
                    console.log(date, 'nextTime', exp);
                    const expTimeout = exp - date;
                    dispatch(actSetTimeOutLogOut(history, expTimeout));
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(actAuthFailed(err))

            })
    }
};
export const actLogOut = (history) => {
    localStorage.removeItem('UserAdmin');
    localStorage.removeItem('Exp');
    history.replace('/auth');
    return {
        type: ActionTypes.AUTH_CLEAR_DATA,
    }
}
export const actTryLogIn = (history) => {
    return (dispatch) => {
        // debugger;
        if (!localStorage.getItem('UserAdmin')) {
            return;
        }
        const exp = localStorage.getItem('Exp');
        const date = new Date().getTime();
        if (date > exp) {
            dispatch(actLogOut(history));
        } else {
            const user = JSON.parse(localStorage.getItem("UserAdmin"));
            setHeaders(user.accessToken);
            dispatch(actAuthSuccess(user));
        }

    }
}

const actSetTimeOutLogOut = (history, expTimeout) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(actLogOut(history));
        }, expTimeout);
    }

}
const actAuthRequest = () => {
    return {
        type: ActionTypes.AUTH_REQUEST,
    }
}
const actAuthSuccess = (data) => {
    return {
        type: ActionTypes.AUTH_SUCCESS,
        payload: data,
    }
}
const actAuthFailed = (err) => {
    return {
        type: ActionTypes.AUTH_FAILURE,
        payload: err,
    };
}
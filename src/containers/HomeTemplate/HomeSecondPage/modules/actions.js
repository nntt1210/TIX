import api from "../../../../api"

import *as ActionType from "./constants";


export const actFetchDetailMovie = (id) => {
    console.log("ahihi");
    return dispatch => {
        dispatch(actRequestDetailMovie());
        api
            .get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
            .then((result) => {
                console.log("actFetchDetailMovie", result.data);
                dispatch(actSuccessDetailMovie(result.data));
            })
            .catch((err) => {
                dispatch(actFailDetailMovie(err));
            })
    }
}
const actRequestDetailMovie = () => {
    return {
        type: ActionType.REQUEST_SECOND_HOME_PAGE,
    }
}
const actSuccessDetailMovie = (data) => {
    return {
        type: ActionType.SUCCESS_SECOND_HOME_PAGE,
        payload: data,
    }
}
const actFailDetailMovie = (err) => {
    return {
        type: ActionType.FAIL_SECOND_HOME_PAGE,
        payload: err,
    }
}
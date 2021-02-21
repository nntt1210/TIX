import { data } from "jquery";
import * as ActionType from "./constants";
import api from "../../../api/index";

export const actFetchFilmDetail = (movieId) => {
    console.log("reducerMovieDetail", movieId);
    return dispatch => {
        dispatch(actRequestFetch());
        api
            .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`)
            .then((result) => {
                console.log("SUCCESS", result.data);
                dispatch(actMovieDetailSuccess(result.data));
            })
            .catch(() => {
                dispatch(actMovieDetailFail());
            })
    }
}

const actRequestFetch = () => {
    return {
        type: ActionType.REQUEST_DATA_DETAIL,
    }
}
const actMovieDetailSuccess = (data) => {
    return {
        type: ActionType.SUCCESS_DATA_DETAIL,
        payload: data,
    }
}
const actMovieDetailFail = () => {
    return {
        type: ActionType.FAIL_DATA_DETAIL,
    }
}

import * as ActionType from './constants';
import api from "../../../../api/index";

export const actFetchComingSoonApi = () => {
    return dispatch => {
        dispatch(actRequestMovie());
        api
            .get(`api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP15`)
            .then((result) => {
                console.log('actFetchComingSoonApi', result.data);
                dispatch(actListMovieSuccess(result.data));
            })
            .catch((err) => {
                console.log(err);
                dispatch(actListMovieFail(err));
            })
    }
}

const actRequestMovie = () => {
    return {
        type: ActionType.REQUEST_DATA_COMING_SOON,
    }
}
const actListMovieSuccess = (data) => {
    console.log('get OK');
    return {
        type: ActionType.SUCCESS_DATA_COMING_SOON,
        payload: data
    }
}
const actListMovieFail = (err) => {
    return {
        type: ActionType.FAIL_DATA_COMING_SOON,
        payload: err
    }
}



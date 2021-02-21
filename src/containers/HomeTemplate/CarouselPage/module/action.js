
import api from '../../../../api/index';
import * as ActionType from "./constants";
import { actFetchComingSoonApi } from "../../ComingSoonPage/module/actions";
import { actFetchListMovieTinTucApi } from "../../TinTucPage/module/action";
import { actFetchListCumRapApi } from "../../CumRapPage/modules/action";


export const actFetchListMovieHomePageApi = (soTrang) => {
    return dispatch => {
        dispatch(actRequestMovie());
        api
            .get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=GP15`)
            .then((result) => {
                console.log('redux', result.data);
                dispatch(actListMovieSuccess(result.data));
                dispatch(actFetchComingSoonApi());
                dispatch(actFetchListMovieTinTucApi(8));
                dispatch(actFetchListCumRapApi());
            })
            .catch((err) => {
                console.log(err);
                dispatch(actListMovieFail(err));
            })
    }
}

const actFetchListMovieHomePageInternal = (soTrang) => {
    return async dispatch => {
        dispatch(actRequestMovie());
        api
            .get(`api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=8&soPhanTuTrenTrang=${soTrang}`)
            .then((result) => {
                console.log('redux', result.data);
                dispatch(actListMovieSuccess(result.data));
            })
            .catch((err) => {
                console.log(err);
                dispatch(actListMovieFail(err));
            })
    }
}
export const getDataModal = (data) => {
    return {
        type: ActionType.DATA_MODAL_HOME_PAGE,
        payload: data,
    }
}
const actRequestMovie = () => {
    return {
        type: ActionType.REQUEST_DATA_HOME_PAGE,
    }
}
const actListMovieSuccess = (data) => {
    console.log('get OK');
    return {
        type: ActionType.SUCCESS_DATA_HOME_PAGE,
        payload: data
    }
}
const actListMovieFail = (err) => {
    return {
        type: ActionType.FAIL_DATA_HOME_PAGE,
        payload: err
    }
}



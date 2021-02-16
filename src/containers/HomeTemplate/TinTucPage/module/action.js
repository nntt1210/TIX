
import api from '../../../../api/index';
import * as ActionType from './constant';

export const actFetchListMovieTinTucApi = (soTrang) => {
    return dispatch => {
        dispatch(actRequestMovie());
        api
            .get(`api/QuanLyPhim/LayDanhSachPhimPhanTrang??maNhom=GP15&soTrang=1&soPhanTuTrenTrang=${soTrang}`)
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
const actRequestMovie = () => {
    return {
        type: ActionType.REQUEST_DATA_TIN_TUC,
    }
}
const actListMovieSuccess = (data) => {
    console.log('get OK');
    return {
        type: ActionType.SUCCESS_DATA_TIN_TUC,
        payload: data
    }
}
const actListMovieFail = (err) => {
    return {
        type: ActionType.FAIL_DATA_TIN_TUC,
        payload: err
    }
}


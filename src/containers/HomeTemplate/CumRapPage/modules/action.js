
import api from '../../../../api/index';
import * as ActionType from './constants';

export const actFetchListCumRapApi = () => {
    return dispatch => {
        dispatch(actRequestCinemas());
        api
            .get(`/api/QuanLyRap/LayThongTinHeThongRap`)
            .then((result) => {
                console.log('LayThongTinHeThongRap', result.data);
                dispatch(actListCinemasSuccess(result.data));

            })
            .catch((err) => {
                console.log(err);
                dispatch(actListCinemasFail(err));
            })
    }
}
export const actCallDetailCinemas = (data) => {
    return dispatch => {
        api
            .get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${data}`)
            .then((result) => {
                console.log("LayThongTinLichChieuHeThongRap", result.data);
                dispatch(actDetailCinemasSuccess(result.data))
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
const actDetailCinemasSuccess = (data) => {
    return {
        type: ActionType.DATA_DETAIL_CUM_RAP,
        payload: data
    }
}
const actRequestCinemas = () => {
    return {
        type: ActionType.REQUEST_DATA_CUM_RAP,
    }
}
const actListCinemasSuccess = (data) => {
    console.log('CumRapget OK');
    return {
        type: ActionType.SUCCESS_DATA_CUM_RAP,
        payload: data
    }
}
const actListCinemasFail = (err) => {
    return {
        type: ActionType.FAIL_DATA_CUM_RAP,
        payload: err
    }
}


import * as ActionType from "./constants";
import api from "./../../../Api";

export const actGetSystemCinemaApi = () => {
  return (dispatch) => {
    dispatch(actGetSystemCinemaRequest());
    api
      .get(`/QuanLyRap/LayThongTinHeThongRap`)
      .then((result) => {
        console.log(result.data);
        dispatch(actGetSystemCinemaSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actGetSystemCinemaFailed(err));
      });
  };
};

const actGetSystemCinemaRequest = () => {
  return {
    type: ActionType.GET_SYSTEM_CINEMA_REQUEST,
  };
};

const actGetSystemCinemaSuccess = (data) => {
  return {
    type: ActionType.GET_SYSTEM_CINEMA_SUCCESS,
    payload: data,
  };
};

const actGetSystemCinemaFailed = (err) => {
  return {
    type: ActionType.GET_SYSTEM_CINEMA_FAILED,
    payload: err,
  };
};

export const actGetDetailListCinemaApi = (cinemaID) => {
  return (dispatch) => {
    dispatch(actGetDetailListCinemaRequest());
    api
      .get(`/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${cinemaID}`)
      .then((result) => {
        dispatch(actGetDetailListCinemaSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actGetDetailListCinemaFailed(err));
      });
  };
};

const actGetDetailListCinemaRequest = () => {
  return {
    type: ActionType.GET_DETAIL_LIST_CINEMA_REQUEST,
  };
};

const actGetDetailListCinemaSuccess = (data) => {
  return {
    type: ActionType.GET_DETAIL_LIST_CINEMA_SUCCESS,
    payload: data,
  };
};

const actGetDetailListCinemaFailed = (err) => {
  return {
    type: ActionType.GET_DETAIL_LIST_CINEMA_FAILED,
    payload: err,
  };
};

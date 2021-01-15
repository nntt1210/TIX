import * as ActionType from "./constants";
import api from "./../../../Api";

export const actGetSystemCinemaApi = () => {
  return (dispatch) => {
    dispatch(actGetSystemCinemaRequest());
    api
      .get(`/QuanLyRap/LayThongTinHeThongRap`)
      .then((result) => {
        dispatch(actGetSystemCinemaSuccess(result.data));
        // console.log(result.data);
      })
      .catch((err) => {
        dispatch(actGetSystemCinemaFailed(err));
        console.log(err);
      });
  };
};

const actGetSystemCinemaRequest = () => {
  return {
    type: ActionType.GET_SYSTEM_CINEMA_REQUEST,
  };
};

export const actGetSystemCinemaSuccess = (data) => {
  return {
    type: ActionType.GET_SYSTEM_CINEMA_SUCCESS,
    payload: data,
  };
};

export const actGetSystemCinemaFailed = (err) => {
  return {
    type: ActionType.GET_SYSTEM_CINEMA_FAILED,
    payload: err,
  };
};

export const actGetSystemShowTimeApi = (groupID) => {
  return (dispatch) => {
    dispatch(actGetSystemShowTimeRequest());
    api
      .get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${groupID}`)
      .then((result) => {
        dispatch(actGetSystemShowTimeSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actGetSystemShowTimeFailed(err));
        console.log(err);
      });
  };
};

const actGetSystemShowTimeRequest = () => {
  return {
    type: ActionType.GET_SYSTEM_SHOWTIME_REQUEST,
  };
};

const actGetSystemShowTimeSuccess = (data) => {
  return {
    type: ActionType.GET_SYSTEM_SHOWTIME_SUCCESS,
    payload: data,
  };
};

const actGetSystemShowTimeFailed = (err) => {
  return {
    type: ActionType.GET_SYSTEM_SHOWTIME_FAILED,
    payload: err,
  };
};

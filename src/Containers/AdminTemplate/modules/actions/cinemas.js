import { cinemaService } from '../../../../services';
import * as ActionType from './../constants';

export const actGetCinemaListApi = (id) => {
  return (dispatch) => {
    dispatch(actGetCinemaListRequest());
    cinemaService
      .fetchCinemaSystemInfo(id)
      .then((result) => {
        dispatch(actGetCinemaListSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actGetCinemaListFailed(err));
      });
  };
};

const actGetCinemaListRequest = () => {
  return {
    type: ActionType.GET_CINEMA_LIST_REQUEST,
  };
};

const actGetCinemaListSuccess = (data) => {
  return {
    type: ActionType.GET_CINEMA_LIST_SUCCESS,
    payload: data,
  };
};

const actGetCinemaListFailed = (err) => {
  return {
    type: ActionType.GET_CINEMA_LIST_REQUEST,
    payload: err,
  };
};

export const getCinemaSystemInfo = (id) => {
  return (dispatch) => {
    cinemaService
      .fetchCinemaSystemInfo(id)
      .then((res) => {
        dispatch({
          type: ActionType.GET_CINEMA_SYSTEM_INFO,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getCinemaInfo = (id) => {
  return (dispatch) => {
    cinemaService
      .fetchCinemaInfo(id)
      .then((res) => {
        dispatch({
          type: ActionType.GET_CINEMA_INFO,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getAddCinemaInfo = (id) => {
  return (dispatch) => {
    cinemaService
      .fetchCinemaInfo(id)
      .then((res) => {
        dispatch({
          type: ActionType.GET_ADD_CINEMA_INFO,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getCinemaTime = (id) => {
  return (dispatch) => {
    cinemaService
      .fetchCinemaTime(id)
      .then((res) => {
        dispatch({
          type: ActionType.GET_CINEMA_TIME,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const setCurrentTime = (date) => {
  return (dispatch) => {
    dispatch({
      type: ActionType.SET_DATE,
      payload: date,
    });
  };
};

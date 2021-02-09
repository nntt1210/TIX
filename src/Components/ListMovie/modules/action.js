import * as ActionType from "./constants";
import api from "./../../../Api";

export const actListMovieApi = (groupID) => {
  return (dispatch) => {
    dispatch(actListMovieRequest());
    api
      .get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`)
      .then((result) => {
        dispatch(actListMovieSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListMovieFailed(err));
      });
  };
};

const actListMovieRequest = () => {
  return {
    type: ActionType.LIST_MOVIE_REQUEST,
  };
};

const actListMovieSuccess = (data) => {
  return {
    type: ActionType.LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

const actListMovieFailed = (err) => {
  return {
    type: ActionType.LIST_MOVIE_FAILED,
    payload: err,
  };
};

export const actListUpcomingMovieApi = (groupID) => {
  return (dispatch) => {
    dispatch(actListUpcomingMovieRequest());
    api
      .get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`)
      .then((result) => {
        dispatch(actListUpcomingMovieSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListUpcomingMovieFailed(err));
      });
  };
};

const actListUpcomingMovieRequest = () => {
  return {
    type: ActionType.LIST_UPCOMING_MOVIE_REQUEST,
  };
};

const actListUpcomingMovieSuccess = (data) => {
  return {
    type: ActionType.LIST_UPCOMING_MOVIE_SUCCESS,
    payload: data,
  };
};

const actListUpcomingMovieFailed = (err) => {
  return {
    type: ActionType.LIST_UPCOMING_MOVIE_FAILED,
    payload: err,
  };
};

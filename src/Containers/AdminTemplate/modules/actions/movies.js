import { movieService } from "./../../../../Services";
import * as ActionType from "./../constants";

export const actGetMovieListApi = (pageNumber = 1, itemsPerPage = 12) => {
  return (dispatch) => {
    dispatch(actGetMovieListRequest());
    movieService
      .fetchMovieListPagination(pageNumber, itemsPerPage)
      .then((result) => {
        dispatch(actGetMovieListSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actGetMovieListFailed(err));
      });
  };
};

const actGetMovieListRequest = () => {
  return {
    type: ActionType.FETCH_MOVIES_REQUEST,
  };
};
const actGetMovieListSuccess = (data) => {
  return {
    type: ActionType.FETCH_MOVIES_REQUEST,
    payload: data,
  };
};
const actGetMovieListFailed = (err) => {
  return {
    type: ActionType.FETCH_MOVIES_REQUEST,
    payload: err,
  };
};

export const actGetMoviesApi = (keyword) => {
  return (dispatch) => {
    dispatch(actGetMoviesRequest());
    movieService
      .fetchMovies(keyword)
      .then((result) => {
        dispatch(actGetMoviesSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actGetMoviesFailed(err));
      });
  };
};

const actGetMoviesRequest = () => {
  return {
    type: ActionType.FETCH_MOVIES_REQUEST,
  };
};

const actGetMoviesSuccess = (data) => {
  return {
    type: ActionType.FETCH_MOVIES_SUCCESS,
    payload: data,
  };
};

const actGetMoviesFailed = (err) => {
  return {
    type: ActionType.FETCH_MOVIES_REQUEST,
    payload: err,
  };
};

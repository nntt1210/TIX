import * as ActionType from "./../constants";
import { showTimeService } from "../../../../Services";
import { getCinemaSystems } from "../../../../Helpers/schedule-cinema-manager";
import { getSystems } from "../../../../Helpers/movie-detail-manager";

export const actGetAllCinemaShowTimesApi = () => {
  return (dispatch) => {
    dispatch(actGetAllCinemaShowTimeRequest());
    showTimeService
      .fetchAllCinemaShowTimes()
      .then((res) => {
        dispatch(actGetAllCinemaShowTimeSuccess(res.data));
        const systems = getCinemaSystems(res.data);
        dispatch(actGetCinemaSystemId(systems[0]));
      })
      .catch((err) => {
        dispatch(actGetAllCinemaShowTimeFailed(err));
      });
  };
};

const actGetAllCinemaShowTimeRequest = () => {
  return {
    type: ActionType.GET_ALL_CINEMA_SHOWTIME_REQUEST,
  };
};

const actGetAllCinemaShowTimeSuccess = (data) => {
  return {
    type: ActionType.GET_ALL_CINEMA_SHOWTIME_SUCCESS,
    payload: data,
  };
};
const actGetAllCinemaShowTimeFailed = (err) => {
  return {
    type: ActionType.GET_ALL_CINEMA_SHOWTIME_FAILED,
    payload: err,
  };
};

export const actGetCinemaSystemId = (cinema) => {
  return {
    type: ActionType.GET_CINEMA_SYSTEM_ID,
    payload: {
      id: cinema.id,
      logo: cinema.logo,
    },
  };
};

export const actGetMovieShowTimesApi = (movieId) => {
  return (dispatch) => {
    dispatch(actGetMovieShowTimesRequest());
    showTimeService
      .fetchMovieShowTimes(movieId)
      .then((res) => {
        dispatch(actGetMovieShowTimesSuccess(res.data));

        const systems = getSystems(res.data);
        dispatch(actGetCinemaSystemId(systems[0]));
      })
      .catch((err) => {
        dispatch(actGetMovieShowTimesFailed(err));
      });
  };
};

const actGetMovieShowTimesRequest = () => {
  return {
    type: ActionType.GET_MOVIE_SHOWTIME_REQUEST,
  };
};

const actGetMovieShowTimesSuccess = (data) => {
  return {
    type: ActionType.GET_MOVIE_SHOWTIME_SUCCESS,
    payload: data,
  };
};

const actGetMovieShowTimesFailed = (err) => {
  return {
    type: ActionType.GET_MOVIE_SHOWTIME_REQUEST,
    payload: err,
  };
};

import * as ActionType from "./../constants";

let initialState = {
  allCinema: [],
  movie: [],
  loading: false,
  err: null,
};

const showTimesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_ALL_CINEMA_SHOWTIME_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case ActionType.GET_ALL_CINEMA_SHOWTIME_SUCCESS: {
      state.loading = false;
      state.allCinema = action.payload;
      return { ...state };
    }
    case ActionType.GET_ALL_CINEMA_SHOWTIME_FAILED: {
      state.loading = false;
      state.err = action.payload;
      return { ...state };
    }
    case ActionType.GET_MOVIE_SHOWTIME_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case ActionType.GET_MOVIE_SHOWTIME_SUCCESS: {
      state.loading = false;
      state.movie = action.payload;
      return { ...state };
    }
    case ActionType.GET_MOVIE_SHOWTIME_FAILED: {
      state.loading = false;
      state.err = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default showTimesReducer;

import * as ActionType from "./constants";

let initialState = {
  loading: false,
  detailMovie: null,
  err: null,
};

const detailMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.DETAIL_MOVIE_REQUEST:
      state.loading = true;
      state.detailMovie = null;
      state.err = null;
      return { ...state };
    case ActionType.DETAIL_MOVIE_SUCCESS:
      state.loading = false;
      state.detailMovie = action.payload;
      state.err = null;
      return { ...state };
    case ActionType.DETAIL_MOVIE_FAILED:
      state.loading = false;
      state.detailMovie = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default detailMovieReducer;

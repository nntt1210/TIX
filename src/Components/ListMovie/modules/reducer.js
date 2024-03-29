import * as ActionType from "./constants";

let initialState = {
  data: [],
  nextData: null,
  err: null,
  loading: false,
};

const listMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LIST_MOVIE_REQUEST:
      // state.data = [];
      // state.err = null;
      state.loading = true;
      return { ...state };
    case ActionType.LIST_MOVIE_SUCCESS:
      state.data = action.payload;
      // state.err = null;
      state.loading = false;
      return { ...state };
    case ActionType.LIST_MOVIE_FAILED:
      // state.data = null;
      state.err = action.payload;
      state.loading = false;
      return { ...state };
    case ActionType.LIST_UPCOMING_MOVIE_REQUEST:
      state.nextData = null;
      state.err = null;
      return { ...state };
    case ActionType.LIST_UPCOMING_MOVIE_SUCCESS:
      state.nextData = action.payload;
      state.err = null;
      return { ...state };
    case ActionType.LIST_UPCOMING_MOVIE_FAILED:
      state.nextData = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default listMovieReducer;

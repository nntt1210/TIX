import * as ActionType from "./constants";

let initialState = {
  data: null,
  nextData: null,
  err: null,
};

const listMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LIST_MOVIE_REQUEST:
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionType.LIST_MOVIE_SUCCESS:
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ActionType.LIST_MOVIE_FAILED:
      state.data = null;
      state.err = action.payload;
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

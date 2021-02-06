import * as ActionType from "./constants";

let initialState = {
  data: null,
};

const buttonTrailerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.MOVIE_TRAILER_MODAL:
      state.data = action.payload;
    default:
      return { ...state };
  }
};

export default buttonTrailerReducer;

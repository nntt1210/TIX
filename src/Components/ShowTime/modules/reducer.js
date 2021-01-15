import * as ActionType from "./constants";

let initialState = {
  listCinema: null,
  listShowTime: null,
  err: null,
};

const showTimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_SYSTEM_CINEMA_REQUEST:
      state.listCinema = null;
      state.err = null;
      return { ...state };
    case ActionType.GET_SYSTEM_CINEMA_SUCCESS:
      state.listCinema = action.payload;
      state.err = null;
      return { ...state };
    case ActionType.GET_SYSTEM_CINEMA_FAILED:
      state.listCinema = null;
      state.err = action.payload;
      return { ...state };
    case ActionType.GET_SYSTEM_SHOWTIME_REQUEST:
      state.listShowTime = [];
      state.err = null;
      return { ...state };
    case ActionType.GET_SYSTEM_SHOWTIME_SUCCESS:
      state.listShowTime = action.payload;
      state.err = null;
      return { ...state };
    case ActionType.GET_SYSTEM_SHOWTIME_FAILED:
      state.listShowTime = [];
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default showTimeReducer;

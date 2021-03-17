import * as ActionType from "./constants";

let initialState = {
  listCinema: [],
  listShowTime: [],
  err: null,
  loadingCinema: false,
  loadingShowTime: false,
};

const showTimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_SYSTEM_CINEMA_REQUEST:
      state.loadingCinema = true;
      return { ...state };
    case ActionType.GET_SYSTEM_CINEMA_SUCCESS:
      // state.listCinema.push(action.payload);
      state.listCinema = action.payload;
      state.loadingCinema = false;
      return { ...state };
    case ActionType.GET_SYSTEM_CINEMA_FAILED:
      state.err = action.payload;
      state.loadingCinema = false;
      return { ...state };
    case ActionType.GET_SYSTEM_SHOWTIME_REQUEST:
      state.loadingShowTime = true;
      return { ...state };
    case ActionType.GET_SYSTEM_SHOWTIME_SUCCESS:
      state.listShowTime = action.payload;
      state.loadingShowTime = false;
      return { ...state };
    case ActionType.GET_SYSTEM_SHOWTIME_FAILED:
      state.err = action.payload;
      state.loadingShowTime = false;
      return { ...state };
    default:
      return { ...state };
  }
};

export default showTimeReducer;

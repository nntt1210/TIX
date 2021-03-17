import * as ActionType from "./constants";

let initialState = {
  data: null,
  loading: false,
  err: null,
  list: null,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_SEAT_LIST_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionType.GET_SEAT_LIST_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ActionType.GET_SEAT_LIST_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    case ActionType.BOOKING_REQUEST:
      state.loading = true;
      return { ...state };
    case ActionType.BOOKING_SUCCESS:
      state.loading = false;
      return { ...state };
    case ActionType.BOOKING_FAILED:
      state.loading = false;
      return { ...state };
    case ActionType.RESET_STATE:
      state = initialState;
      return { ...state };
    default:
      return { ...state };
  }
};

export default bookingReducer;

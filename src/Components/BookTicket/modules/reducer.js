import * as ActionType from "./constants";
let initialState = {
  result: {},
  movie: "",
  cinema: "",
  date: "",
  showTime: "",
};

const bookingBoxReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIE_SHOWTIME_SUCCESS: {
      state.result = action.payload;
      return { ...state };
    }
    case ActionType.GET_SELECTED_MOVIE: {
      state.movie = action.payload;
      state.cinema = "";
      state.date = "";
      state.showTime = "";
      return { ...state };
    }
    case ActionType.GET_SELECTED_CINEMA: {
      state.cinema = action.payload;
      state.date = "";
      state.showTime = "";
      return { ...state };
    }
    case ActionType.GET_SELECTED_DATE: {
      state.date = action.payload;
      state.showTime = "";
      return { ...state };
    }
    case ActionType.GET_SELECTED_SHOW_TIME: {
      state.showTime = action.payload;
      return { ...state };
    }
    case ActionType.RESET_STATE: {
      state = initialState;
      console.log("reset state", state);
      return { ...state };
    }
    default:
      return state;
  }
};

export default bookingBoxReducer;

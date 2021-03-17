import * as ActionType from "./../constants";
let initialState = {
  list: [],
  listAdd: [],
  selected: "",
  selectedAdd: "",
  selectedNumber: "",
};

const cinemasReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_ID_CINEMA: {
      state.selected = action.payload;
      return { ...state };
    }
    case ActionType.GET_CINEMA_INFO: {
      state.list = action.payload;
      return { ...state };
    }
    case ActionType.GET_ADD_CINEMA_INFO: {
      state.listAdd = action.payload;
      return { ...state };
    }
    case ActionType.RESET_STATE: {
      state = initialState;
      return { ...state };
    }
    default:
      return state;
  }
};

export default cinemasReducer;

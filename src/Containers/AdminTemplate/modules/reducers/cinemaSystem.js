import * as ActionType from "./../constants";

let initialState = {
  list: [],
  selected: "",
  selectedLogo: "",
  selectedAdd: "",
};

const cinemaSystemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_ID_CINEMA_SYSTEM: {
      state.selected = action.payload.id;
      state.selectedLogo = action.payload.logo;
      return { ...state };
    }
    case ActionType.GET_CINEMA_SYSTEM_INFO: {
      state.list = action.payload;
      return { ...state };
    }
    case ActionType.GET_SELECTED_CINEMA_SYSTEM: {
      state.selected = action.payload;
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

export default cinemaSystemReducer;

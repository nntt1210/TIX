import * as ActionType from "./constants";

let initialState = {
  listCinema: null,
  listDetailCinema: null,
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

    case ActionType.GET_DETAIL_LIST_CINEMA_REQUEST:
      state.listDetailCinema = null;
      state.err = null;
      return { ...state };
    case ActionType.GET_DETAIL_LIST_CINEMA_SUCCESS:
      let listDetailCinema = [...state.listDetailCinema];
      listDetailCinema.push(action.payload);
      //   state.listDetailCinema = action.payload;
      state.listDetailCinema = listDetailCinema;
      state.err = null;
      return { ...state };
    case ActionType.GET_DETAIL_LIST_CINEMA_FAILED:
      state.listDetailCinema = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default showTimeReducer;

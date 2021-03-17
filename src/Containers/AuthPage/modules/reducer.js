import * as ActionType from "./constants";

let initialState = {
  login: "",
  loading: false,
  err: null,
  info: "",
};

const json = localStorage.getItem("userLogin");
if (json) {
  initialState.login = JSON.parse(json);
}

const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SIGN_IN_REQUEST:
      state.loading = true;
      state.err = null;
      return { ...state };
    case ActionType.SIGN_IN_SUCCESS:
      state.loading = false;
      state.err = null;
      state.login = action.payload;
      return { ...state };
    case ActionType.SIGN_IN_FAILED:
      state.loading = false;
      state.err = action.payload;
      return { ...state };
    case ActionType.GET_ACCOUNT_INFO:
      state.info = action.payload;
      return { ...state };
    case ActionType.REMOVE_CREDENTIALS: {
      state.login = "";
      return { ...state };
    }
    case ActionType.RESET_STATE: {
      state.login = "";
      state.loading = false;
      state.err = null;
      state.info = "";
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default userLoginReducer;

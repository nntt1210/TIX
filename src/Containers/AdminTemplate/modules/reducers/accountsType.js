import * as ActionType from "./../constants";

let initialState = {
  loading: false,
  err: null,
  data: null,
};

const accountsTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_ACCOUNTS_TYPE_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case ActionType.GET_ACCOUNTS_TYPE_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      return { ...state };
    }
    case ActionType.GET_ACCOUNTS_TYPE_FAILED: {
      state.loading = false;
      state.err = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default accountsTypeReducer;

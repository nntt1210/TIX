import * as ActionType from "./../constants";

let initialState = {};

const userAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_ACCOUNT_INFO: {
      state = action.payload;
      return { ...state };
    }
    case ActionType.REMOVE_CREDENTIALS: {
      return initialState;
    }
    default:
      return state;
  }
};

export default userAccountReducer;

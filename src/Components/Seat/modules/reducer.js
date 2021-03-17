import * as ActionType from "./constants";

let initialState = [];

const chosenSeatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHOOSE_SEAT: {
      const idx = state.findIndex(
        (item) => item.maGhe === action.payload.maGhe
      );
      if (idx === -1) {
        state.push(action.payload);
      } else {
        state.splice(idx, 1);
      }
      return [...state];
    }
    case ActionType.RESET_STATE: {
      state = [];
      return [...state];
    }
    default:
      return state;
  }
};

export default chosenSeatReducer;

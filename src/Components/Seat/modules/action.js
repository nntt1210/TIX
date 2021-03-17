import * as ActionType from "./constants";

export const actChooseSeat = (data) => {
  return {
    type: ActionType.CHOOSE_SEAT,
    payload: data,
  };
};

export const resetChosenSeats = () => {
  return {
    type: ActionType.RESET_STATE,
  };
};

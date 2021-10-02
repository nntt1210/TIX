import { bookingService } from "../../../../Services";
import * as ActionType from "./constants";

export const actGetSeatListApi = (idShowTime) => {
  return (dispatch) => {
    dispatch(actGetSeatListRequest());
    bookingService
      .fetchSeatList(idShowTime)
      .then((result) => {
        dispatch(actGetSeatListSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actGetSeatListFailed(err));
      });
  };
};

const actGetSeatListRequest = () => {
  return {
    type: ActionType.GET_SEAT_LIST_REQUEST,
  };
};

const actGetSeatListSuccess = (data) => {
  return {
    type: ActionType.GET_SEAT_LIST_SUCCESS,
    payload: data,
  };
};

const actGetSeatListFailed = (err) => {
  return {
    type: ActionType.GET_SEAT_LIST_FAILED,
    payload: err,
  };
};

export const actBookTicketApi = (data, token) => {
  return (dispatch) => {
    dispatch(actBookTicketRequest());
    bookingService
      .bookTicket(data, token)
      .then((res) => {
        alert("Bạn đã đặt vé thành công ! Chúc bạn xem phim vui vẻ");
      })
      .catch((err) => {
        dispatch(actBookTicketFailed(err));
      });
  };
};

const actBookTicketRequest = () => {
  return {
    type: ActionType.BOOKING_REQUEST,
  };
};

// const actBookTicketSuccess = () => {
//   return {
//     type: ActionType.BOOKING_SUCCESS,
//   };
// };

const actBookTicketFailed = (err) => {
  return {
    type: ActionType.BOOKING_FAILED,
    payload: err,
  };
};

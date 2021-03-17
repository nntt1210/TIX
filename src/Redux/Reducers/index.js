import { combineReducers } from "redux";
import listMovieReducer from "./../../Components/ListMovie/modules/reducer";
import showTimeReducer from "./../../Components/ShowTime/modules/reducer";
import detailMovieReducer from "./../../Containers/HomeTemplate/DetailMoviePage/modules/reducer";
import buttonTrailerReducer from "./../../Components/ButtonTrailer/modules/reducer";
import chosenSeatReducer from "./../../Components/Seat/modules/reducer";
import bookingReducer from "./../../Containers/HomeTemplate/BookingPage/modules/reducer";
import userLoginReducer from "./../../Containers/AuthPage/modules/reducer";
import accountsReducer from "./../../Containers/AdminTemplate/modules/reducers/accounts";
import accountsTypeReducer from "./../../Containers/AdminTemplate/modules/reducers/accountsType";
import moviesReducer from "./../../Containers/AdminTemplate/modules/reducers/movies";
import cinemasReducer from "./../../Containers/AdminTemplate/modules/reducers/cinemas";
import cinemaSystemReducer from "./../../Containers/AdminTemplate/modules/reducers/cinemaSystem";
import userAccountReducer from "./../../Containers/AdminTemplate/modules/reducers/userAccount";
import bookingBoxReducer from "./../../Components/BookTicket/modules/reducer";
const rootReducer = combineReducers({
  listMovieReducer,
  showTimeReducer,
  bookingBoxReducer,
  detailMovieReducer,
  buttonTrailerReducer,
  chosenSeatReducer,
  bookingReducer,
  userLoginReducer,
  accountsReducer,
  accountsTypeReducer,
  moviesReducer,
  cinemasReducer,
  cinemaSystemReducer,
  userAccountReducer,
});

export default rootReducer;

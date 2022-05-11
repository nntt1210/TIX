import { combineReducers } from 'redux';
import listMovieReducer from '../../components/ListMovie/modules/reducer';
import showTimeReducer from '../../components/ShowTime/modules/reducer';
import detailMovieReducer from '../../containers/HomeTemplate/DetailMoviePage/modules/reducer';
import buttonTrailerReducer from '../../components/ButtonTrailer/modules/reducer';
import chosenSeatReducer from '../../components/Seat/modules/reducer';
import bookingReducer from '../../containers/HomeTemplate/BookingPage/modules/reducer';
import userLoginReducer from '../../containers/AuthPage/modules/reducer';
import accountsReducer from '../../containers/AdminTemplate/modules/reducers/accounts';
import accountsTypeReducer from '../../containers/AdminTemplate/modules/reducers/accountsType';
import moviesReducer from '../../containers/AdminTemplate/modules/reducers/movies';
import cinemasReducer from '../../containers/AdminTemplate/modules/reducers/cinemas';
import cinemaSystemReducer from '../../containers/AdminTemplate/modules/reducers/cinemaSystem';
import userAccountReducer from '../../containers/AdminTemplate/modules/reducers/userAccount';
import bookingBoxReducer from '../../components/BookTicket/modules/reducer';
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

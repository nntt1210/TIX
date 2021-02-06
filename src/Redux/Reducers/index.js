import { combineReducers } from "redux";
import listMovieReducer from "./../../Components/ListMovie/modules/reducer";
import showTimeReducer from "./../../Components/ShowTime/modules/reducer";
import detailMovieReducer from "./../../Containers/HomeTemplate/DetailMoviePage/modules/reducer";
import buttonTrailerReducer from "./../../Components/ButtonTrailer/modules/reducer";

const rootReducer = combineReducers({
  listMovieReducer,
  showTimeReducer,
  detailMovieReducer,
  buttonTrailerReducer,
});

export default rootReducer;

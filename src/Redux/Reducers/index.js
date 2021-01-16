import { combineReducers } from "redux";
import listMovieReducer from "./../../Components/ListMovie/modules/reducer";
import showTimeReducer from "./../../Components/ShowTime/modules/reducer";
import detailMovieReducer from "./../../Containers/HomeTemplate/DetailMoviePage/modules/reducer";

const rootReducer = combineReducers({
  listMovieReducer,
  showTimeReducer,
  detailMovieReducer,
});

export default rootReducer;
import { combineReducers } from "redux";
import listMovieReducer from "./../../Components/ListMovie/modules/reducer";
import showTimeReducer from "./../../Components/ShowTime/modules/reducer";

const rootReducer = combineReducers({
  listMovieReducer,
  showTimeReducer,
});

export default rootReducer;

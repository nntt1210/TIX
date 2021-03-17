import * as ActionType from "./../constants";

let initialState = {
  list: [],
  isEdited: false,
  edited: {
    maPhim: "",
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh:
      "https://images.moviepostershop.com/replicas-movie-poster-100077879d1.jpg",
    moTa: "",
    maNhom: "",
    ngayKhoiChieu: new Date(),
    danhGia: 0,
  },
  keyWord: "",
  poster: null,
  selected: "",
  selectedAdd: "",
  loading: false,
  err: null,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_MOVIES_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case ActionType.FETCH_MOVIES_SUCCESS: {
      state.loading = false;
      state.list = action.payload;
      return { ...state };
    }
    case ActionType.FETCH_MOVIES_FAILED: {
      state.loading = false;
      state.err = action.payload;
      return { ...state };
    }
    case ActionType.GET_EDIT_MOVIE_STATUS: {
      state.isEdited = action.payload;
      return { ...state };
    }
    case ActionType.GET_EDITED_MOVIE: {
      if (action.payload) state.edited = action.payload;
      else state.edited = initialState.edited;
      return { ...state };
    }
    //   case GET_KEYWORD_MOVIE: {
    //     state.keyWord = action.payload;
    //     return { ...state };
    //   }
    case ActionType.GET_POSTER: {
      state.poster = action.payload;
      return { ...state };
    }
    case ActionType.GET_SELECTED_MOVIE: {
      state.selected = action.payload;
      console.log(state);
      return { ...state };
    }
    case ActionType.RESET_STATE: {
      return initialState;
    }
    default:
      return state;
  }
};

export default moviesReducer;

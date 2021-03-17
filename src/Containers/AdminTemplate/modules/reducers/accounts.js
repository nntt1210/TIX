import * as ActionType from "./../constants";

let initialState = {
  loading: false,
  err: null,
  list: [],
  isEdited: false,
  edited: {
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP00",
    maLoaiNguoiDung: "",
    hoTen: "",
  },
  keyWord: "",
};

const accountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_ACCOUNTS_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case ActionType.FETCH_ACCOUNTS_SUCCESS: {
      state.loading = false;
      state.list = action.payload;
      return { ...state };
    }
    case ActionType.FETCH_ACCOUNTS_FAILED: {
      state.loading = false;
      state.err = action.payload;
      return { ...state };
    }
    case ActionType.GET_EDIT_STATUS: {
      state.isEdited = action.payload;
      return { ...state };
    }
    case ActionType.GET_EDITED_USER: {
      if (action.payload) state.edited = action.payload;
      else state.edited = initialState.edited;
      return { ...state };
    }
    case ActionType.GET_KEYWORD_USER: {
      state.keyWord = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default accountsReducer;


import *as ActionType from "./constants";

const initReducer = {
    loading: false,
    data: [],
    err: null,
}
const reducerMovieDetail = (state = initReducer, action) => {
    switch (action.type) {
        case ActionType.REQUEST_DATA_DETAIL: {
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        }
        case ActionType.SUCCESS_DATA_DETAIL: {
            state.loading = false;
            // console.log("SUCCESS_DATA_DETAIL", action.payload.lichChieu[0]);
            state.data = action.payload.lichChieu[0];
            state.err = null;
            return { ...state };
        }
        case ActionType.FAIL_DATA_DETAIL: {
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state };
        }
        default: return { ...state };
    }
}
export default reducerMovieDetail;
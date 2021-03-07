import * as ActionType from "./constants";

let initReducer = {
    isLoading: false,
    data: {},
    heThongRapChieu: [],
    err: null,
}


const reducerSecondPage = (state = initReducer, action) => {
    switch (action.type) {
        case ActionType.REQUEST_SECOND_HOME_PAGE: {
            state.isLoading = true;
            state.data = null;
            state.err = null;
            return { ...state }
        }
        case ActionType.SUCCESS_SECOND_HOME_PAGE: {
            console.log("reducerSecondPage", action.payload);
            state.isLoading = false;
            state.data = action.payload;
            state.heThongRapChieu = action.payload.heThongRapChieu;
            state.err = null;
            return { ...state }
        }
        case ActionType.FAIL_SECOND_HOME_PAGE: {
            state.isLoading = false;
            state.data = null;
            state.err = action.data;
            return { ...state }
        }

        default: return { ...state }
    }
}
export default reducerSecondPage;
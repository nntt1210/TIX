import * as ActionType from "./constants";

const initReducer = {
    cinemasList: [],
    isLoading: false,
    err: null,
    detailCinemas: [],
}

const reducerCumRap = (state = initReducer, action) => {
    switch (action.type) {
        case ActionType.REQUEST_DATA_CUM_RAP: {
            state.isLoading = true;
            state.cinemasList = null;
            state.err = null;
            return { ...state };
        }
        case ActionType.SUCCESS_DATA_CUM_RAP: {
            state.isLoading = false;
            console.log("reducerCumRap", action.payload);
            state.cinemasList = action.payload;
            state.err = null;
            return { ...state };
        }
        case ActionType.FAIL_DATA_CUM_RAP: {
            state.isLoading = false;
            state.cinemasList = null;
            state.err = action.payload;
            return { ...state };
        }
        case ActionType.DATA_DETAIL_CUM_RAP: {
            console.log("DATA_DETAIL_CUM_RAP", action.payload);
            state.detailCinemas = action.payload;
            return { ...state }
        }
        default: return { ...state };
    }

}
export default reducerCumRap;
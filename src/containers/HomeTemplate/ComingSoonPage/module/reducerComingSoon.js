import * as ActionType from "./constants";

const initReducer = {
    movieComingSoon: [],
    isLoading: false,
    err: null,
}

const reducerComingSoon = (state = initReducer, action) => {
    switch (action.type) {
        case ActionType.REQUEST_DATA_COMING_SOON: {
            state.isLoading = true;
            state.movieComingSoon = null;
            state.err = null;
            return { ...state };
        }
        case ActionType.SUCCESS_DATA_COMING_SOON: {
            state.isLoading = false;
            console.log("reducerComingSoon", action.payload);
            state.movieComingSoon = action.payload;
            state.err = null;
            return { ...state };
        }
        case ActionType.FAIL_DATA_COMING_SOON: {
            state.isLoading = false;
            state.movieComingSoon = null;
            state.err = action.payload;
            return { ...state };
        }

        default: return { ...state };
    }

}
export default reducerComingSoon;
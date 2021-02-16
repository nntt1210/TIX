import *as ActionTypes from "./constants";

const initAuthApi = {
    loading: false,
    data: null,
    error: null,
}
export const authPageReducer = (state = initAuthApi, action) => {
    switch (action.type) {
        case ActionTypes.AUTH_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }
        case ActionTypes.AUTH_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }
        }
        case ActionTypes.AUTH_FAILURE: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        }
        case ActionTypes.AUTH_CLEAR_DATA: {
            state.loading = false;
            state.data = null;
            state.error = null;
            return { ...state }
        }
        default: return { ...state };
    }
}
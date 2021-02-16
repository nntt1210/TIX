
import * as ActionType from "./constants";

const initRegister = {
    loading: false,
    data: null,
    error: null,
}

export const addReducerRegister = (state = initRegister, action) => {
    switch (action.type) {
        case ActionType.ADD_USER_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        };
        case ActionType.ADD_USER_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        };
        case ActionType.ADD_USER_FAILED: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        };
        default: return { ...state };
    }
}
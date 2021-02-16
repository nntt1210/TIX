
import { useReducer } from 'react';
import *as ActionType from './constant';

const initReducer = {
    movieTinTuc: [],
    isLoading: false,
    err: null,
}


const reducerTinTuc = (state = initReducer, action) => {
    switch (action.type) {
        case ActionType.REQUEST_DATA_TIN_TUC: {
            state.isLoading = true;
            state.movieTinTuc = null;
            state.err = null;
            return { ...state };
        }
        case ActionType.SUCCESS_DATA_TIN_TUC: {
            console.log('reducerTinTuc', action.payload.items);
            state.isLoading = false;
            state.movieTinTuc = action.payload.items;
            state.err = null;
            return { ...state };
        }
        case ActionType.FAIL_DATA_TIN_TUC: {
            state.isLoading = false;
            state.movieTinTuc = null;
            state.err = action.payload;
            return { ...state };
        }

        default: return { ...state };
    }

}
export default reducerTinTuc;
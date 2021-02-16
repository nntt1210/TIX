
import *as ActionType from './constants';

const initReducer = {
    moviesHomePage: [],
    isLoading: false,
    err: null,
    modalItem: [],
}

const reducerHomePage = (state = initReducer, action) => {
    switch (action.type) {
        case ActionType.REQUEST_DATA_HOME_PAGE: {
            state.isLoading = true;
            state.moviesHomePage = null;
            state.err = null;
            return { ...state };
        }
        case ActionType.SUCCESS_DATA_HOME_PAGE: {
            console.log('reducerHomePage', action.payload.items);
            state.isLoading = false;
            state.moviesHomePage = action.payload.items;
            state.err = null;
            return { ...state };
        }
        case ActionType.FAIL_DATA_HOME_PAGE: {
            state.isLoading = false;
            state.moviesHomePage = null;
            state.err = action.payload;
            return { ...state };
        }
        case ActionType.DATA_MODAL_HOME_PAGE: {
            console.log("DATA_MODAL", action.payload);
            let copyMovieList = [...state.moviesHomePage];
            console.log("copyMovieList", copyMovieList);
            const index = copyMovieList.findIndex(item => {
                return item.maPhim == action.payload.maPhim;
            })
            state.modalItem = copyMovieList[index].trailer;
            return { ...state };
        }

        default: return { ...state };
    }

}
export default reducerHomePage;
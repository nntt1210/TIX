import { combineReducers } from "redux";
import reducerTinTuc from '../containers/HomeTemplate/TinTucPage/module/reducerTinTucPage';
import reducerHomePage from '../containers/HomeTemplate/HomePage/module/reducerHomePage';
import reducerComingSoon from "../containers/HomeTemplate/ComingSoonPage/module/reducerComingSoon";
import reducerCumRap from "../containers/HomeTemplate/CumRapPage/modules/reducerCumRapPage";
import { addReducerRegister } from "../containers/HomeTemplate/LoginPage/RegisterForm/modules/reducerRegister";
import { authPageReducer } from "../containers/HomeTemplate/LoginPage/ModalLogin/modules/reducerLogin";


const rootReducer = combineReducers({
    //noi chua cac reducer con
    reducerTinTuc,
    reducerHomePage,
    reducerComingSoon,
    reducerCumRap,
    authPageReducer,
    addReducerRegister,
});
export default rootReducer;
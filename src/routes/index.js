
import HomeMainPage from '../containers/HomeTemplate/HomeMainPage/HomeMainPage';
import HomePage from '../containers/HomeTemplate/HomePage';
import LayoutHome from '../containers/HomeTemplate/index';
import HomeTemplate from '../containers/HomeTemplate/index';
import LoginPage from '../containers/HomeTemplate/LoginPage/LoginPage';
import RegisterForm from '../containers/HomeTemplate/LoginPage/RegisterForm/RegisterForm';
import TinTucPage from '../containers/HomeTemplate/TinTucPage';


const routesHome = [
    { exact: true, path: '/', component: HomeMainPage },
    { exact: false, path: '/login', component: LoginPage },
    { exact: false, path: '/signUp', component: RegisterForm },
]

export { routesHome };
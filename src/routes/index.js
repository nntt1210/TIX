
import HomeMainPage from '../containers/HomeTemplate/HomeMainPage/HomeMainPage';
import LoginPage from '../containers/HomeTemplate/LoginPage/LoginPage';
import RegisterForm from '../containers/HomeTemplate/LoginPage/RegisterForm/RegisterForm';



const routesHome = [
    { exact: true, path: '/', component: HomeMainPage },
    { exact: false, path: '/login', component: LoginPage },
    { exact: false, path: '/signUp', component: RegisterForm },
]

export { routesHome };
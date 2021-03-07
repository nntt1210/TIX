

import ChinhSachBaoMatPage from '../containers/HomeTemplate/FaqPage/ChinhSachBaoMatPage';
import FaqPage from '../containers/HomeTemplate/FaqPage/FaqPage';
import ThoaThuanPage from '../containers/HomeTemplate/FaqPage/ThoaThuanPage';
import HomeMainPage from '../containers/HomeTemplate/HomeMainPage/HomeMainPage';
import HomeSecondPage from '../containers/HomeTemplate/HomeSecondPage/HomeSecondPage';
import LoginPage from '../containers/HomeTemplate/LoginPage/LoginPage';
import RegisterForm from '../containers/HomeTemplate/LoginPage/RegisterForm/RegisterForm';


const routesHome = [
    { exact: true, path: '/', component: HomeMainPage },
    { exact: false, path: '/login', component: LoginPage },
    { exact: false, path: '/signUp', component: RegisterForm },
    { exact: false, path: '/phim/:id', component: HomeSecondPage },
    { exact: false, path: '/faq', component: FaqPage },
    { exact: false, path: '/thoa-thuan-su-dung', component: ThoaThuanPage },
    { exact: false, path: '/chinh-sach-bao-mat', component: ChinhSachBaoMatPage }
]

export { routesHome };
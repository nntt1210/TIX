import HomePage from '../containers/HomeTemplate/HomePage';
import DetailMoviePage from '../containers/HomeTemplate/DetailMoviePage';
// import BookingPage from "./../Containers/HomeTemplate/BookingPage";

import AccountDetail from '../components/AccountDetail';
import Admin from '../containers/AdminTemplate/AdminPage';
import UserManagement from '../components/UserManagement';
import MovieManagement from '../components/MovieManagement';
import ShowTimeManagement from '../components/ShowTimeManagement';
import PersonalInfo from '../components/PersonalInfo';

const routesHome = [
  {
    exact: true,
    path: '/',
    component: HomePage,
  },
  {
    exact: false,
    path: '/home',
    component: HomePage,
  },
  {
    exact: false,
    path: '/phim/:id',
    component: DetailMoviePage,
  },
  {
    exact: false,
    path: '/account-detail',
    component: AccountDetail,
  },
];

const routesAdmin = [
  {
    exact: false,
    path: '/admin',
    component: Admin,
  },
  {
    exact: true,
    path: '/user-management',
    component: UserManagement,
  },
  {
    exact: true,
    path: '/movie-management',
    component: MovieManagement,
  },
  {
    exact: true,
    path: '/showtime-management',
    component: ShowTimeManagement,
  },
  {
    exact: false,
    path: '/personal-info',
    component: PersonalInfo,
  },
];

export { routesHome, routesAdmin };

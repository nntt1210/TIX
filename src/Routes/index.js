import HomePage from "./../Containers/HomeTemplate/HomePage";
import DetailMoviePage from "./../Containers/HomeTemplate/DetailMoviePage";
// import BookingPage from "./../Containers/HomeTemplate/BookingPage";

import AccountDetail from "../Components/AccountDetail";
import Admin from "../Containers/AdminTemplate/AdminPage";
import UserManagement from "../Components/UserManagement";
import MovieManagement from "../Components/MovieManagement";
import ShowTimeManagement from "../Components/ShowTimeManagement";
import PersonalInfo from "../Components/PersonalInfo";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/home",
    component: HomePage,
  },
  {
    exact: false,
    path: "/phim/:id",
    component: DetailMoviePage,
  },
  {
    exact: false,
    path: "/account-detail",
    component: AccountDetail,
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/admin",
    component: Admin,
  },
  {
    exact: true,
    path: "/user-management",
    component: UserManagement,
  },
  {
    exact: true,
    path: "/movie-management",
    component: MovieManagement,
  },
  {
    exact: true,
    path: "/showtime-management",
    component: ShowTimeManagement,
  },
  {
    exact: false,
    path: "/personal-info",
    component: PersonalInfo,
  },
];

export { routesHome, routesAdmin };

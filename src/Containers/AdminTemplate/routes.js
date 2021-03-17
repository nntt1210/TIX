import MovieManagement from "../../Components/MovieManagement";
import PersonalInfo from "../../Components/PersonalInfo";
import ShowTimeManagement from "../../Components/ShowTimeManagement";
import UserManagement from "../../Components/UserManagement";

const routes = [
  {
    exact: false,
    path: "/user-management",
    component: UserManagement,
  },
  {
    exact: false,
    path: "/movie-management",
    component: MovieManagement,
  },
  {
    exact: false,
    path: "/showtime-management",
    component: ShowTimeManagement,
  },
  {
    exact: false,
    path: "/personal-info",
    component: PersonalInfo,
  },
];

export default routes;

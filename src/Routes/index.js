import HomePage from "./../Containers/HomeTemplate/HomePage";
import DetailMoviePage from "./../Containers/HomeTemplate/DetailMoviePage";

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
];

export { routesHome };

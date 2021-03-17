import React from "react";
import HomeTemplate from "./Containers/HomeTemplate";
import { Route, Switch } from "react-router-dom";
import { routesHome } from "./Routes";
import PageNotFound from "./Containers/PageNotFound";
import BookingPage from "./Containers/HomeTemplate/BookingPage";
import SignInPage from "./Containers/AuthPage/SignInPage/index";
import SignUpPage from "./Containers/AuthPage/SignUpPage/index";
import Admin from "./Containers/AdminTemplate/AdminPage";

export default function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  // const showLayoutAdmin = (routes) => {
  //   if (routes && routes.length > 0) {
  //     return routes.map((item, index) => {
  //       return (
  //         <AdminTemplate
  //           key={index}
  //           exact={item.exact}
  //           path={item.path}
  //           Component={item.component}
  //         />
  //       );
  //     });
  //   }
  // };
  // console.log(routesAdmin);

  return (
    <Switch>
      {showLayoutHome(routesHome)}
      {/* {showLayoutAdmin(routesAdmin)} */}
      <Route path="/booking/:id" component={BookingPage} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/admin" component={Admin} />
      {/* <Route exact path="/admin">
        <Redirect to="/admin/user-management" />
      </Route> */}
      <Route path="" component={PageNotFound} />
    </Switch>
  );
}

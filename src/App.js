import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routesHome } from './routes';
import HomeTemplate from './containers/HomeTemplate';
import PageNotFound from './containers/PageNotFound';
import BookingPage from './containers/HomeTemplate/BookingPage';
import SignInPage from './containers/AuthPage/SignInPage/index';
import SignUpPage from './containers/AuthPage/SignUpPage/index';
import Admin from './containers/AdminTemplate/AdminPage';

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

  return (
    <Switch>
      {showLayoutHome(routesHome)}
      <Route path='/booking/:id' component={BookingPage} />
      <Route path='/signin' component={SignInPage} />
      <Route path='/signup' component={SignUpPage} />
      <Route path='/admin' component={Admin} />
      {/* <Route exact path="/admin">
        <Redirect to="/admin/user-management" />
      </Route> */}
      <Route path='' component={PageNotFound} />
    </Switch>
  );
}

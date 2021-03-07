import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, withRouter, Route } from 'react-router-dom';
import { LayoutHome } from './containers/HomeTemplate';
import HomeTemplate from './containers/HomeTemplate';
import { routesHome } from './routes';

class App extends Component {

  showLayOutHome = (route) => {
    if (route && route.length > 0) {
      console.log("showRoute");
      return route.map((item, index) => {
        return <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
      })
    }
  }

  render() {
    return (
      <Switch>
        {/* <Route path="/" component={LayoutHome} /> */}
        {this.showLayOutHome(routesHome)}
      </Switch>
    );
  }
}

// const ConnectComponent = connect(null, null)(App);
export default withRouter(App);
import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { routesHome } from "./Routes";
import HomeTemplate from "./Containers/HomeTemplate";
import { connect } from "react-redux";

class App extends Component {
  showLayoutHome = (routes) => {
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

  render() {
    return <Switch>{this.showLayoutHome(routesHome)}</Switch>;
  }
}

const connectedComponent = connect(null, null)(App);

export default withRouter(connectedComponent);

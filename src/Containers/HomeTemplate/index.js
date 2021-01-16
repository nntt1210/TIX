import React from "react";
import { Route } from "react-router-dom";
import HeaderComponent from "./../../Components/Header/HeaderComponent";

function LayoutHome(props) {
  return (
    <React.Fragment>
      <HeaderComponent />
      {props.children}
    </React.Fragment>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <LayoutHome>
          <Component {...propsComponent} />
        </LayoutHome>
      )}
    />
  );
}

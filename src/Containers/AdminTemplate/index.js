import React from "react";
import { Route } from "react-router-dom";

function LayoutAdmin(props) {
  return <React.Fragment>{props.children}</React.Fragment>;
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <LayoutAdmin>
          <Component {...propsComponent} />
        </LayoutAdmin>
      )}
    />
  );
}

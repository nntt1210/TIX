import React from 'react';
import { Route } from 'react-router-dom';

import PropTypes from 'prop-types';

import Header from './../../Components/Header/index';

function LayoutHome(props) {
  return (
    <React.Fragment>
      <Header />
      {props.children}
    </React.Fragment>
  );
}

// eslint-disable-next-line react/prop-types
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
LayoutHome.propTypes = {
  children: PropTypes.object,
};

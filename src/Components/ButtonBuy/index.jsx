import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import useStyles from './style';

export default function ButtonBuy(props) {
  const { buy } = props;
  const styles = useStyles();

  const handleClick = () => {
    alert('Hãy chọn suất chiếu bên dưới !');
  };

  if (buy)
    return (
      <NavLink to={`/phim/${buy}`} className={styles.root}>
        Mua vé
      </NavLink>
    );
  else
    return (
      <NavLink to='#' onClick={() => handleClick()} className={styles.root}>
        Mua vé
      </NavLink>
    );
}

ButtonBuy.propTypes = {
  buy: PropTypes.number,
};

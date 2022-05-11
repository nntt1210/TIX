import React from 'react';

import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ImgWrapper from '../ImgWrapper';
import useStyles from './style';
import {
  renderCinemaAddress,
  renderCinemaName,
} from '../../Helpers/cinema-manager';

export default function CinemaItem(props) {
  const { target, name, address, active, system, collapse } = props;
  const styles = useStyles();
  const Component = ({ children }) => {
    return collapse ? (
      <>{children}</>
    ) : (
      <Box className='collapsed' data-toggle='collapse' data-target={target}>
        {children}
      </Box>
    );
  };
  return (
    <Box
      className={classnames(styles.item, active && 'active')}
      data-toggle='tab'
      data-target={target}
      role='tab'
    >
      <Component>
        <Box className={styles.detail}>
          <ImgWrapper src={`./img/${system}_theater.jpg`} alt={system} />
          <Box className={styles.info}>
            <Box className={styles.name} component='span'>
              <Box className={system} component='span'>
                {renderCinemaName(name)}- {renderCinemaAddress(name)}
              </Box>
            </Box>
            <Box className={styles.address} component='span'>
              {address}
            </Box>
          </Box>
        </Box>
      </Component>
    </Box>
  );
}
CinemaItem.propTypes = {
  target: PropTypes.string,
  name: PropTypes.string,
  address: PropTypes.string,
  active: PropTypes.bool,
  system: PropTypes.string,
  collapse: PropTypes.bool,
  children: PropTypes.element,
};

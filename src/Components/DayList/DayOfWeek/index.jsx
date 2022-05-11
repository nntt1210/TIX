import React from 'react';

import { Box, Typography } from '@mui/material';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import useStyles from './style';

export default function DayOfWeek(props) {
  const { active, day, date } = props;
  const styles = useStyles();

  return (
    <Box
      className={classnames(styles.item, active && 'active')}
      data-toggle='tab'
      role='tab'
      onClick={props.onClick}
    >
      <Typography
        component='p'
        className={classnames(styles.weekDay, styles.paragraph)}
      >
        {day}
      </Typography>
      <Typography
        component='p'
        className={classnames(styles.date, styles.paragraph)}
      >
        {date}
      </Typography>
    </Box>
  );
}
DayOfWeek.propTypes = {
  active: PropTypes.bool,
  day: PropTypes.string,
  date: PropTypes.string,
  onClick: PropTypes.func,
};

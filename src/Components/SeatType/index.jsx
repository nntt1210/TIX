import React from 'react';

import { useTheme } from '@mui/material';
import { Box } from '@mui/material';

import WeekendIcon from '@mui/icons-material/Weekend';
import Tag from '../Tag';
import useStyles from './style';

const SeatNote = () => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <Box className={styles.root}>
      <Box className={styles.note}>
        <Tag
          title='Ghế thường'
          iconElement={<WeekendIcon />}
          hoverColor='none'
          color={theme.color.gray.light}
          noPointer
        />
      </Box>
      <Box className={styles.note}>
        <Tag
          title='Ghế Vip'
          iconElement={<WeekendIcon />}
          hoverColor='none'
          color={theme.color.yellow.dark}
          noPointer
        />
      </Box>
      <Box className={styles.note}>
        <Tag
          title='Ghế đang chọn'
          iconElement={<WeekendIcon />}
          hoverColor='none'
          color={theme.color.green.dark}
          noPointer
        />
      </Box>
      <Box className={styles.note}>
        <Tag
          title='Ghế đã chọn'
          iconElement={<WeekendIcon />}
          hoverColor='none'
          color={theme.color.red.light}
          noPointer
        />
      </Box>
    </Box>
  );
};

export default SeatNote;

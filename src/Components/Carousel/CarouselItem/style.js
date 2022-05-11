import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    transition: 'all 0.2s',
    '&:hover': {
      transition: 'all 0.2s',
      '& .overlay': {
        opacity: 1,
      },
    },
  },
  trailerImg: {
    width: '100%',
    height: 'auto',
  },
}));

export default useStyles;

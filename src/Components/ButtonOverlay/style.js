import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: 0,
    transition: '0.5s all',
    '&:hover': {
      opacity: 0.7,
    },

    // display: "none",
  },
}));

export default useStyles;

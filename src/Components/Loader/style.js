import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  '@keyframes ldsRipple': {
    '0%': {
      top: '36px',
      left: '36px',
      width: 0,
      height: 0,
      opacity: 1,
    },
    '100%': {
      top: '0px',
      left: '0px',
      width: '72px',
      height: '72px',
      opacity: 0,
    },
  },
  loader: {
    display: 'inline-block',
    // position: "relative",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80px',
    height: '80px',
    '& div': {
      position: 'absolute',
      border: '4px solid #ffbb00',
      opacity: 1,
      borderRadius: '50%',
      animation: '$ldsRipple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite',
    },
    '& div:nth-child(2)': {
      animationDelay: '-0.5s',
    },
  },
  // container: {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%,-50%)",
  // },
}));
export default useStyles;

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 576,
    margin: "auto",
  },

  screen: {
    width: "100%",
  },

  seatList: {
    margin: "auto",
  },

  seatNote: {
    margin: theme.spacing(1),
  },
}));

export default useStyles;

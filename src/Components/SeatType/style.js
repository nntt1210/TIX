import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },

  note: {
    margin: theme.spacing(0.5),
  },
}));

export default useStyles;

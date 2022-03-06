import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    textAlign: "center",
  },

  letter: {
    fontSize: 15,
    fontWeight: 600,
  },
}));

export default useStyles;

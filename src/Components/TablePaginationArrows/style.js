import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },

  button: {
    "&:focus": {
      outline: "none",
    },
  },
}));

export default useStyles;

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    background: theme.color.white.main,
    height: "100%",
  },
  dialog: {
    "&.MuiDialog-paperWidthSm": {
      maxWidth: "100%",
    },
  },
  table: {
    padding: theme.spacing(1, 0),
  },

  totalPrice: {
    paddingBottom: theme.spacing(1),
  },

  center: {
    textAlign: "center",
  },

  right: {
    textAlign: "right",
  },

  price: {
    fontWeight: 600,
    color: theme.color.green.dark,
  },

  dashedBoder: {
    borderBottom: "1.5px dashed rgba(224, 224, 224, 1)",
  },

  showTimeInfo: {
    padding: theme.spacing(1, 0),
  },

  seats: {
    padding: theme.spacing(1, 0),
    alignItems: "center",
  },

  userInfo: {
    padding: theme.spacing(1, 0),
    display: "flex",
    flexDirection: "column",
  },

  input: {
    margin: theme.spacing(1, 0),

    "& .MuiInputBase-root, & .MuiInputLabel-root": {
      fontSize: "0.875rem",
    },

    "& .MuiInputLabel-root": {
      color: theme.color.blue.light,
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: 5,

      "& fieldset": {
        borderColor: theme.color.blue.light,
      },
      "&:hover fieldset": {
        borderColor: theme.color.blue.light,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.color.blue.light,
      },
    },
  },

  button: {
    width: "100%",
    height: 50,
    color: theme.color.white.main,
    margin: 0,
    fontWeight: 600,
    fontSize: "1.0rem",
    "&:focus": {
      outline: "none",
    },
  },
}));

export default useStyles;

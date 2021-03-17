import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  avatar: {
    margin: "5px auto",
    width: 200,
    height: 200,
  },
  info: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  editButton: {
    "&:focus": {
      outline: "none",
    },
  },

  input: {
    margin: theme.spacing(1, 0),

    "& .MuiInputBase-root, & .MuiInputLabel-root": {
      fontSize: theme.typography.body2.fontSize,
    },

    "& .MuiInputLabel-root": {
      color: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: theme.shape.borderRadius,

      "& fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },

    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "49.5%",
    },
  },
}));
export default useStyles;

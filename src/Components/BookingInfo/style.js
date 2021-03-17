import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.color.orange.main,
    margin: theme.spacing(1, 0),
    textAlign: "left",
    // fontSize: theme.typography.h6.fontSize,
  },

  info: {
    display: "flex",
    flexDirection: "column",
  },

  dateGroup: {
    display: "flex",

    [theme.breakpoints.up("xs")]: {
      width: "100%",
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      width: "auto",
      flexDirection: "row",
    },
  },

  table: {
    margin: theme.spacing(1, 0),
    borderRadius: theme.shape.borderRadius,
  },
}));

export default useStyles;

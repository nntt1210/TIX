import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  logo: {
    width: 50,
    height: 50,
    marginRight: theme.spacing(1),
  },

  name: {
    color: theme.color.orange.light,
    fontWeight: 700,
  },

  address: {
    color: theme.color.gray.main,
    fontSize: 12,
    fontWeight: 700,
  },

  detail: {
    color: theme.color.gray.main,
    display: "block",
    fontSize: 12,
    "&:hover": {
      textDecoration: "none",
      color: theme.color.gray.main,
    },

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  ellipsis: {
    width: (props) => (props.hasEllipsis ? 210 : "100%"),
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: (props) => (props.hasEllipsis ? "ellipsis" : "initial"),
    display: "-webkit-box",
    lineClamp: 2,
    boxOrient: "vertical",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      whiteSpace: "pre-wrap",
    },
  },
}));

export default useStyles;

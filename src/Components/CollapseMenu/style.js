// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   collapseMenu: {
//     [theme.breakpoints.up("md")]: {
//       display: "none",
//     },
//   },

//   list: {
//     [theme.breakpoints.up("xs")]: {
//       width: 150,
//     },
//     [theme.breakpoints.up("xsm")]: {
//       width: 200,
//     },
//   },

//   linkText: {
//     color: theme.palette.text.primary,

//     "&:hover": {
//       textDecoration: "none",
//       color: theme.palette.text.secondary,
//       transition: "all 0.3s",
//     },
//   },
// }));

// export default useStyles;
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // button: {
  //   outline: "none",
  //   position: "absolute",
  //   right: "10%",
  // },
  list: {
    width: 200,
  },

  linkText: {
    color: theme.color.black.main,
    transition: "all 0.3s",
    fontWeight: 600,
    "&:hover": {
      textDecoration: "none",
      color: theme.color.orange.main,
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  },
}));

export default useStyles;

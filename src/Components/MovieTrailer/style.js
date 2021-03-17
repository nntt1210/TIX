import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    // display: none;
    [theme.breakpoints.down("sm")]: {
      display: "none !important",
    },
  },
  dialog: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "600px",
      minHeight: "calc(100% - 3.5rem)",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "800px",
      margin: "1.75rem auto",
      minHeight: "calc(100% - 1rem)",
    },
  },
  content: {
    backgroundColor: "#000",
  },
  body: {
    padding: "50% 0 35px",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    maxWidth: "100%",
    height: "100%",
  },
}));
export default useStyles;

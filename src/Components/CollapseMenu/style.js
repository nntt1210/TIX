import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    pointerEvents: "none",
    zIndex: 10,
    overflow: "hidden",
    transition: "all 0.4s",
    display: "none",
  },
  link: {
    padding: "10px",
    color: theme.color.black.main,
    "&:hover": {
      textDecoration: "none",
      color: theme.color.orange.main,
      transition: "all 0.3s",
    },
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "inline",
    },
    fontWeight: "bold",
  },
  menuMobile: {
    position: "absolute",
    top: 0,
    right: "-70%",
    width: "70%",
    height: "100%",
    background: "#fff",
    transition: "all 0.4s",
    overflow: "hidden",
    // overflow-y: scroll;
  },
  wrapFirst: {
    padding: "10px",
    position: "relative",
    "& img": {
      width: "36px",
      height: "36px",
      borderRadius: "50%",
    },
  },
  btnLogin: {},
  btnAvatarMobile: {
    marginLeft: "5px",
    marginRight: "5px",
  },
  close: {
    position: "absolute",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
  },
}));
export default useStyles;

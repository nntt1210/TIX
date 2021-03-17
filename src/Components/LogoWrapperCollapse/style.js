import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logo: {
    // border: "1px solid transparent",
    // padding: "15px",
    // position: "relative",
    // transition: "all 0.2s",
    // opacity: 0.5,
    // width: "unset",
    // flexShrink: 0,
    // [theme.breakpoints.up("sm")]: {
    //   padding: "20px",
    // },
    width: "100%",
    border: "none",
    position: "relative",
    opacity: 1,
    transition: "all .5s",
    "&:after": {
      content: "",
      position: "absolute",
      left: "50%",
      bottom: "2px",
      transform: "translateX(-50%)",
      backgroundColor: "#ebebec",
      height: "2px",
      width: "calc(100% - 40px)",
    },
    // "&.active": {
    //   opacity: 1,
    // },
    // "&:hover": {
    //   opacity: 1,
    // },
  },
  detail: {
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",
    "& img": {
      width: "40px",
      [theme.breakpoints.up("xs")]: {
        width: "50px",
      },
    },
  },
  name: {
    paddingLeft: "10px",
    fontSize: "15px",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  arrow: {
    position: "absolute",
    top: "50%",
    right: "20px",
    transform: "translateY(-50%)",
    width: "20px",
    height: "20px",
    background: "url(/img/next-session.png)",
  },
  wrapperCollapse: {
    position: "relative",
    width: "100%",
    padding: "20px",
    border: "none",
    opacity: 1,
    transition: "all .5s",
  },
  mainCollapse: {
    display: "flex",
    position: "relative",
    cursor: "pointer",
    transition: "all .5s",
  },
}));

export default useStyles;

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logo: {
    border: "1px solid transparent",
    padding: "15px",
    position: "relative",
    transition: "all 0.2s",
    opacity: 0.5,
    width: "unset",
    flexShrink: 0,
    [theme.breakpoints.up("sm")]: {
      padding: "20px",
    },
    "&:after": {
      content: "",
      position: "absolute",
      bottom: 0,
      left: "50%",
      width: "calc(100% - 40px)",
      transform: "translateX(-50%)",
      borderBottom: "1px solid #fff",
      borderColor: "rgba(238, 238, 238, 0.878)",
    },
    "&.active": {
      opacity: 1,
    },
    "&:hover": {
      opacity: 1,
    },
    "& img": {
      width: "40px",
      [theme.breakpoints.up("xs")]: {
        width: "50px",
      },
    },
  },
  detail: {
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",
  },
  name: {
    paddingLeft: "10px",
    fontSize: "15px",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  arrow: {},
}));

export default useStyles;

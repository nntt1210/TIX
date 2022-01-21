import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "none",
    height: "100%",
    width: "100%",
    // background: "#f44a1c",
    background: "#fb4226",
    padding: 0,
    fontSize: "18px",
    color: "#fff",
    textDecoration: "none",
    transition: "0.5s all",
    "&:hover": {
      // background: "#fb4226",
      color: "#fff",
      textDecoration: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));

export default useStyles;

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "75px",
  },
  nav: {
    border: "none",
    justifyContent: "center",
  },
  navLink: {
    border: "none",
    borderRadius: 0,
    color: "#000",
    fontSize: "24px",
    fontWeight: 500,
    transform: "scale(0.83333)",
    transition: "all 0.2s",
    "&.active": {
      color: "#fa5238",
      fontSize: "24px",
      transform: "scale(1)",
      background: "transparent",
    },
    "&:hover": {
      transform: "scale(1)",
    },
  },
}));
export default useStyles;

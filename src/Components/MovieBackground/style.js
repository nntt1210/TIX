import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  background: {
    [theme.breakpoints.up("md")]: {
      height: "80vh",
      // webkitFilter: "blur(8px)",
      filter: "blur(8px)",
      transform: "scaleY(0.91)",
      width: "100%",
      objectFit: "cover",
      objectPosition: "center center",
    },
  },
  overlay: {
    background: "linear-gradient(0deg, #0a2029, transparent)",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    pointerEvents: "none",
  },
}));
export default useStyles;

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  container: {
    margin: "0 auto",
    maxWidth: "940px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "calc(100% - 30px)",
    },
    [theme.breakpoints.up("lg")]: {
      width: "calc(100% - 20px)",
    },
  },
  thumbnail: {
    marginTop: "25px",
    position: "relative",
    padding: "0 10px",
    [theme.breakpoints.up("md")]: {
      cursor: "pointer",
    },
  },
  imgThumbnail: {
    [theme.breakpoints.up("md")]: {
      position: "relative",
    },
  },
  title: {
    color: "#e9e9e9",
    fontSize: "20px",
    marginBottom: "0.25rem",
    fontWeight: 600,
  },
}));
export default useStyles;

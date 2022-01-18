import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    padding: 0,
    transition: "0.5s all",
    "&:focus": {
      outline: "none",
    },
    "& span": {
      width: "50px",
      height: "50px",
    },
    "&:hover": {
      opacity: "0.7",
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  },
  playImg: {
    width: "fit-content",
    height: "fit-content",
  },
}));
export default useStyles;

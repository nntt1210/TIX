import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  overlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 0,
    transition: "0.5s all",
    "&:hover": {
      opacity: 0.7,
    },

    // display: "none",
  },
}));

export default useStyles;

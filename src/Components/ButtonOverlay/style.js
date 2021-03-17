import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  overlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 0,
    "&:hover": {
      transition: "all 0.2s",
      opacity: 0.7,
    },

    // display: "none",
  },
}));

export default useStyles;

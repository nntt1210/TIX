import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "50px",
    height: "50px",
    padding: 0,
    "&:focus": {
      outline: "none",
    },
  },
  playImg: {
    width: "fit-content",
    height: "fit-content",
  },
}));
export default useStyles;

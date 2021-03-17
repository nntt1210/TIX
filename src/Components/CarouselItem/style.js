import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    transition: "all 0.2s",
    "&:hover": {
      transition: "all 0.2s",
      "& .overlay": {
        opacity: 1,
      },
    },
  },
}));

export default useStyles;

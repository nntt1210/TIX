import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: theme.spacing(0.5),
    "&:focus": {
      outline: "none",
    },
  },

  seat: {
    color: (props) =>
      props.type === "Thuong"
        ? theme.color.gray.light
        : theme.color.yellow.dark,
  },

  pick: {
    color: theme.color.green.light,
  },

  reserved: {
    color: theme.color.red.light,
  },

  number: {
    position: "absolute",
    top: "43%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 10,
    color: theme.color.black.main,
    fontWeight: 600,
  },
}));

export default useStyles;

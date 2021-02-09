import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "stretch",
    alignItems: "center",
    minWidth: "70px",
    cursor: "pointer",
    opacity: 0.7,
    transition: "all 0.5s",
    "&.active": {
      color: "#fb4226",
      fontWeight: 700,
      opacity: 1,
      transform: "scale(1.1)",
    },
    "&:hover": {
      color: "#fb4226",
      fontWeight: 700,
      opacity: 1,
      transform: "scale(1.1)",
    },
  },
  paragraph: {
    margin: 0,
    fontSize: "14px",
    textAlign: "center",
    pointerEvents: "none",
  },
  weekDay: {
    fontWeight: 700,
  },
  date: {
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
    },
    fontSize: "18px",
  },
}));
export default useStyles;

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  item: {
    width: "100%",
    border: "none",
    position: "relative",
    opacity: 0.7,
    transition: "all 0.5s",
    [theme.breakpoints.down("md")]: {
      opacity: 1,
    },
    "&.active": {
      opacity: 1,
    },
    "&:hover": {
      opacity: 1,
    },
  },
  detail: {
    padding: "20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    paddingLeft: "10px",
  },
  name: {
    display: "block",
    fontWeight: 700,
    "& .BHDStar": {
      color: theme.color.green.main,
    },
    "& .CineStar": {
      color: theme.color.pink.main,
    },
    "& .MegaGS": {
      color: theme.color.yellow.main,
    },
    "& .LotteCinima": {
      color: theme.color.brown.main,
    },
    "& .CGV": {
      color: theme.color.red.main,
    },
    "& .Galaxy": {
      color: theme.color.orange.light,
    },
  },
  address: {
    fontSize: "12px",
    color: "#949494",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
}));
export default useStyles;

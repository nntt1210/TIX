import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "40px",
    background: "#0a2029",
    color: "#e9e9e9",
    fontSize: "14px",
    "& > div": {
      backgroundColor: "white",
      padding: "1rem",
    },
  },
  row: {
    display: "flex",
    marginBottom: "20px",
    "&:last-child": {
      marginBottom: 0,
    },
  },
  title: {
    width: "35%",
    color: theme.color.black.main,
    fontWeight: "bold",
  },
  content: {
    width: "40%",
    color: theme.color.black.main,
  },
  description: {
    width: "100%",
    textAlign: "justify",
    color: theme.color.black.main,
  },
  //   container: {
  //     containerStyle,
  //     [theme.breakpoints.up("md")]: {
  //       width: "calc(100% - 30px)",
  //     },
  //     [theme.breakpoints.up("lg")]: {
  //       width: "calc(100% - 20px)",
  //     },
  //   },
}));
export default useStyles;

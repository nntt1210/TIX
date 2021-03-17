import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "40px",
    background: "#0a2029",
    color: "#e9e9e9",
    fontSize: "14px",
  },
  row: {
    display: "flex",
    marginBottom: "20px",
  },
  title: {
    width: "35%",
    color: "#fff",
  },
  content: {
    width: "40%",
  },
  description: {
    width: "100%",
    textAlign: "justify",
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

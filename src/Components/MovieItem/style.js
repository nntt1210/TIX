import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  item: {
    padding: "20px 15px",
    cursor: "pointer",
    position: "relative",
    "&:hover": {
      "& .overlay": {
        opacity: 1,
      },
      // "& .img::after": {
      //   opacity: 1,
      // },
      // opacity: 0.5
    },
    // img: {
    //   position: "relative",
    //   "&:hover": {
    //     "& a:after": {
    //       opacity: 1,
    //     },
    //   },
    // },
  },

  title: {
    position: "relative",
    width: "100%",
    marginTop: "15px",
    color: "#333",
    fontSize: "16px",
    textTransform: "capitalize",
    fontWeight: 600,
    textOverflow: "ellipsis",
    overflow: "hidden",
    // -webkit-line-clamp: 2,
    // -webkit-box-orient: vertical;
    // display: none;
    height: "40px",
    lineHeight: "20px",
  },
  rate: {
    position: "absolute",
    // bottom: "12px",
    // right: "12px",
    background: "rgba(12, 27, 54, 0.8)",
    borderRadius: "4px",
    border: "1px solid #1f2e46",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "16px",
    // fontWeight: 400,
    pointerEvents: "none",
    // transition: "all 0.2s",

    width: "55px",
    height: "40px",
    top: "30px",
    right: "25px",
    bottom: "unset",
    fontWeight: 600,
  },
  star: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    "& div": {
      width: "8px",
      height: "auto",
    },
  },
  container: {
    display: "none",
    width: "100%",
    height: "40px",
    background: "linear-gradient(270deg, #fb4226, #ce3017)",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}));
export default useStyles;

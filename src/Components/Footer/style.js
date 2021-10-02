import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.color.black.light,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    color: theme.color.white.main,
    fontSize: "80%",
  },
  mainMaxWidth: {
    margin: "0 auto",
    maxWidth: "940px",
  },
  colFirst: {
    "& a": {
      color: theme.color.gray.main,
      display: "block",
      "&:hover": {
        color: theme.color.white.main,
        textDecoration: "none",
      },
    },
  },
  smallIcon: {
    margin: "10px 0",
    padding: 0,
    "& img": {
      borderRadius: "50%",
      height: "30px",
      width: "30px",
      marginRight: "25px",
      marginBottom: "5px",
      "&:hover": {
        opacity: 0.7,
      },
    },
  },
  //   img: {
  //     borderRadius: "50%",
  //     height: "30px",
  //     width: "30px",
  //     marginRight: "25px",
  //     "&:hover": {
  //       opacity: 0.7,
  //     },
  //   },
  colThird: {
    textAlign: "center",
    "& img": {
      height: "100%",
      width: "100%",
    },
  },
  hrFooter: {
    borderTop: `1px solid ${theme.color.gray.main}`,
  },
  imgFooter: {
    width: "80px",
    height: "auto",
  },
  infoFooter: {
    "&:first-child": {
      color: theme.color.white.main,
    },
    color: theme.color.gray.main,
    fontSize: "13px",
    fontWeight: "normal",
    lineHeight: "1.8",
  },
  imgBoCo: {
    width: "130px",
  },
  brandImg: {
    width: "fit-content",
    height: "fit-content",
  },
  logoWrapper: {
    display: "flex",
  },
}));
export default useStyles;

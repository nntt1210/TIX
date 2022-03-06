import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    // [theme.breakpoints.up("sm")]: {
    //   width: "70%",
    // },
    // width: "85%",
    marginTop: "30px",
    background: "#0a2029",
    paddingBottom: "20px",
  },
  //   container: {
  //     margin: "0 auto",
  //     maxWidth: "940px",
  //     width: "100%",
  //     [theme.breakpoints.up("md")]: {
  //       width: "calc(100% - 30px)",
  //     },
  //     [theme.breakpoints.up("lg")]: {
  //       width: "calc(100% - 20px)",
  //     },
  //   },
  input: {
    lineHeight: "42px",
    cursor: "pointer",
  },
  item: {
    boxShadow: "0 0 15px hsla(0, 0%, 100%, 0.3)",
    borderRadius: "10px",
    backgroundColor: "#fff",
    padding: "1rem",
    marginBottom: "1rem",
  },
  header: {},
  avatar: {
    display: "inline-block",
    marginRight: "10px",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
  },
  middle: {
    padding: 0,
  },
  opinion: {
    color: "#000",
    fontSize: "clamp(13px, 2.5vw, 16px)",
    margin: 0,
  },
  iconStar: {
    color: "rgba(220, 53, 69, 0.75)",
    fontSize: "clamp(15px, 3vw, 21px)",
  },
  comment: {
    width: "-webkit-max-content",
    // width: "-moz-max-content",
    // width: "max-content",
    marginLeft: "auto",
    textAlign: "center",
  },
  rating: {
    color: "#44c020",
    fontSize: "clamp(13px, 2.5vw, 16px)",
  },
  star: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    "& > div": {
      width: "fit-content",
      height: "fit-content",
    },
    "& img": {
      width: "20px",
    },
  },
  body: {
    padding: "1rem 0",
    marginTop: "10px",
    "& p": {
      padding: 0,
    },
  },
  line: {
    height: "1px",
    width: "100%",
    backgroundColor: "grey",
    borderRadius: "15px",
    margin: "10px 0",
  },
  interact: {
    display: "inline-block",
    "& img": {
      display: "inline-block",
      width: "20px",
      height: "fit-content",
      marginRight: "10px",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    "&:first-of-type": {
      marginRight: "25px",
    },
  },
  interactGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  likeNum: {
    marginRight: "5px",
  },
  commentNum: {
    marginRight: "5px",
  },
  btnViewMore: {
    color: "#949494",
    fontSize: "14px",
    background: "transparent",
    border: "1px solid #949494",
    padding: "7px 25px",
    borderRadius: "4px",
    fontWeight: 600,
    textAlign: "center",
    transition: "all 0.2s",
    marginBottom: "20px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "35px",
    },
    "&:hover": {
      background: "#fb4226",
      borderColor: "#fb4226",
      color: "#fff",
    },
  },
  btnContainer: {
    width: "100%",
    textAlign: "center",
    marginBottom: "35px",
  },
}));
export default useStyles;

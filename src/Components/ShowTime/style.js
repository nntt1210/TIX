import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "120px",
    paddingBottom: "50px",
    background: "url(/img/back-news.png)",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    // max-width: 940px;
    // margin: auto;
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  listCinema: {
    flexBasis: "92px",
    maxHeight: "554px",
    border: "1px solid #ebebec",
    // flexWrap: "nowrap",
    // justifyContent: "space-between",
    overflowY: "hidden",
    overflowX: "hidden",
    transition: "all 0.5s",
    // @include styleScrollBar();
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
  cinemaTabContent: {
    flexBasis: "30%",
    minWidth: "30%",
    width: "100%",
    maxHeight: "554px",
    border: "1px solid #ebebec",
    overflowX: "hidden",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "5px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 5px grey",
      borderRadius: "10px",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
    "&.fade:not(.show)": {
      display: "none",
    },
    // @media screen and (max-width: 677px) {
    //   width: 100%;
    // }
  },
  cinemaMovies: {
    flexGrow: 1,
    maxHeight: "554px",
    width: "calc(70% - 92px)",
    border: "1px solid #ebebec",
    overflowY: "auto",
  },
  listMovies: {
    // minHeight: "705px",
    borderTop: "1px solid #ebebec",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
  wrapperCollapse: {
    position: "relative",
    width: "100%",
    padding: "20px",
    border: "none",
    opacity: 1,
    transition: "all 0.5s",
  },
  mainCollapse: {
    display: "flex",
    position: "relative",
    cursor: "pointer",
    transition: "all 0.5s",
  },
  wrapInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    paddingLeft: "10px",
    "&::after": {
      content: '"\f078"',
      fontFamily: "Font Awesome 5 Free",
      fontWeight: 900,
      position: "absolute",
      top: "50%",
      right: 0,
      transform: "translateY(-50%)",
      width: "20px",
      height: "20px",
    },
    "&:not(.collapsed)::after": {
      content: '"\f077"',
    },
  },
  movieName: {
    display: "block",
    fontWeight: 700,
  },
  movieDetail: {
    color: "#949494",
    fontSize: "12px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  digital: {
    color: "#000",
    fontSize: "18px",
    fontWeight: 500,
  },
}));

export default useStyles;

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    padding: "20px",
    border: "none",
    opacity: 1,
    transition: "all 0.5s",
    "&::after": {
      content: '""',
      position: "absolute",
      left: "50%",
      bottom: "2px",
      transform: "translateX(-50%)",
      backgroundColor: "#ebebec",
      height: "2px",
      width: "calc(100% - 40px)",
    },
  },
  mainCollapse: {
    display: "flex",
    position: "relative",
    cursor: "pointer",
    transition: "all .5s",
    "&::after": {
      content: "\f078",
      fontFamily: "Font Awesome 5 Free",
      fontWeight: 900,
      position: "absolute",
      top: "50%",
      right: 0,
      transform: "translateY(-50%)",
      width: "20px",
      height: "20px",
    },
  },
  item: {
    padding: 0,
    cursor: "pointer",
    display: "flex",
  },
  wrapInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    paddingLeft: "10px",
  },
  branch: {
    display: "block",
    fontWeight: 700,
  },
  name: {
    "&.BHDStar": {
      color: [theme.color.green.main],
    },
    "&.CGV": {
      color: [theme.color.red.main],
    },
    "&.CineStar": {
      color: [theme.color.pink.main],
    },
    "&.Galaxy": {
      color: [theme.color.orange.light],
    },
    "&.LotteCinima": {
      color: [theme.color.brown.main],
    },
    "&.MegaGS": {
      color: [theme.color.yellow.main],
    },
  },
}));
export default useStyles;

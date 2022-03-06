import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  link: {
    position: "relative",

    display: "block",
    width: "100%",
    height: "100%",
    paddingTop: "147%",
    borderRadius: "4px",

    backgroundPosition: "50%",
    backgroundAttachment: "scroll",
    backgroundSize: "cover",
    backgroundRepeat: "no - repeat",
    "&::after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      borderRadius: "4px",
      pointerEvents: "none",
      background: "linear-gradient(0deg, #000, transparent)",
      opacity: 0,
      transition: "all 0.2s",
      // display: "none",
      [theme.breakpoints.up("md")]: {
        display: "initial",
      },
    },
  },
}));
export default useStyles;

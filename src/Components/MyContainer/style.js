import makeStyles from '@mui/styles/makeStyles';

const useContainerStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    maxWidth: "940px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "calc(100% - 30px)",
    },
    [theme.breakpoints.up("lg")]: {
      width: "calc(100% - 20px)",
    },
  },

  // padding: "0 10px",
}));

export default useContainerStyles;

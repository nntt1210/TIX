import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  link: {
    border: "none",
    borderRadius: 0,
    color: "#e9e9e9",
    fontSize: "24px",
    fontWeight: 500,
    transform: "scale(0.83333)",
    transition: "all 0.2s",
    display: "block",
    padding: ".5rem 1rem",
    "&.active": {
      color: "#fa5238",
      fontSize: "24px",
      transform: "scale(1)",
      background: "transparent",
    },
    "&:hover": {
      color: "#fa5238",
      transform: "scale(1)",
      textDecoration: "none",
    },
  },
}));
export default useStyles;

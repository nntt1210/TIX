import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "75px",
    "& .slick-dots": {
      display: "none!important",
    },
    "& .slick-arrow": {
      position: "absolute",
      top: "45%",
      transform: "translateY(-50%)",
      backgroundColor: "transparent",
      border: "none",
      width: "50px",
      height: "100px",
      zIndex: 2,
      opacity: 0.5,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
      display: "none !important",
      //   "&:hover": {
      //     color: "#fb4226",
      //   },
      "&::before": {
        display: "none",
      },
      // @media screen and (min-width: 1064px) {
      //   display: block !important;
      // }
      [theme.breakpoints.down("xl")]: {
        display: "none !important",
      },
      [theme.breakpoints.up("xl")]: {
        display: "block !important",
      },
    },
    "& .slick-prev": {
      left: "-70px !important",
      backgroundImage: 'url("./img/back-session.png")',
    },
    "& .slick-next": {
      right: "-70px !important",
      backgroundImage: 'url("./img/next-session.png")',
    },
  },
  nav: {
    border: "none",
    justifyContent: "center",
    "& li": {
      display: "inline-block",
      width: "fit-content",
    },
  },
  navLink: {
    border: "none",
    borderRadius: 0,
    color: "#000",
    fontSize: "24px",
    fontWeight: 500,
    transform: "scale(0.83333)",
    transition: "all 0.2s",
    padding: "20px",
    cursor: "pointer",
    "&.active": {
      color: "#fa5238",
      fontSize: "24px",
      transform: "scale(1)",
      background: "transparent",
    },
    "&:hover": {
      transform: "scale(1)",
      color: "#fa5238!important",
      textDecoration: "none",
    },
  },
}));
export default useStyles;

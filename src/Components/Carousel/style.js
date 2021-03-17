import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "60px",
    position: "relative",
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
      [theme.breakpoints.up("md")]: {
        display: "block !important",
      },
    },
    "& .slick-prev": {
      left: "30px !important",
      backgroundImage: 'url("./img/back-session.png")',
    },
    "& .slick-next": {
      right: "30px !important",
      backgroundImage: 'url("./img/next-session.png")',
    },
  },
}));

export default useStyles;

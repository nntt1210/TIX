const styles = (theme) => ({
  root: {
    position: "fixed",
    top: "-1px",
    left: 0,
    width: "100%",
    height: "60px",
    // background-color: rgba(255, 255, 255, 0.95);
    backgroundColor: "white",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
    zIndex: 9,
  },
  left: {
    position: "absolute",
    left: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    "& img": {
      width: "50px",
      height: "50px",
    },
  },
  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  right: {
    position: "absolute",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    // @include text($color-gray-2, $fs-1, $fw-normal);
  },
  account: {
    cursor: "pointer",
    "& img": {
      width: "30px",
      height: "auto",
      borderRadius: "25px",
      marginRight: "5px",
    },
    "& span": {
      paddingRight: "5px",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menudropdown: {
    position: "absolute",
    top: "50%",
    right: "15px",
    transform: "translate3d(0, -50%, 0)",
    width: "25px",
    zIndex: 1,
  },
  rightmobile: {
    position: "absolute",
    top: "50%",
    right: "20px",
    transform: "translateY(-50%)",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "initial",
    },
  },
  sideMenu: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    pointerEvents: "none",
    zIndex: 10,
    overflow: "hidden",
    transition: "all 0.4s",
    wrapMenuMobile: {
      position: "absolute",
      top: 0,
      right: "-70%",
      width: "70%",
      height: "100%",
      background: "#fff",
      transition: "all 0.4s",
      overflow: "hidden",
      wrapFirst: {
        padding: "10px",
        position: "relative",
        "& img": {
          width: "36px",
          height: "36px",
          borderRadius: "50%",
        },
        "& .btnAvatarMobile": {
          marginLeft: "5px",
          marginRight: "5px",
        },
        "& .close": {
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
        },
      },
      // overflow-y: scroll;
    },
    menu: {
      display: "block",
      padding: "20px",
      position: "relative",
      width: "calc(100% - 40px)",
      fontSize: "18px",
      color: "#000",
    },
    "& .active": {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      pointerEvents: "inherit",
      wrapMenuMobile: {
        right: 0,
      },
    },
  },
});
export default styles;

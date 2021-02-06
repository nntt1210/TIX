import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";
import React, { Component } from "react";
const styles = (theme) => ({
  root: {
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
    display: "none",
  },
  link: {
    padding: "10px",
    color: theme.color.black.main,
    "&:hover": {
      textDecoration: "none",
      color: theme.color.orange.main,
      transition: "all 0.3s",
    },
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "inline",
    },
    fontWeight: "bold",
  },
  menuMobile: {
    position: "absolute",
    top: 0,
    right: "-70%",
    width: "70%",
    height: "100%",
    background: "#fff",
    transition: "all 0.4s",
    overflow: "hidden",
    // overflow-y: scroll;
  },
  wrapFirst: {
    padding: "10px",
    position: "relative",
    "& img": {
      width: "36px",
      height: "36px",
      borderRadius: "50%",
    },
  },
  btnLogin: {},
  btnAvatarMobile: {
    marginLeft: "5px",
    marginRight: "5px",
  },
  close: {
    position: "absolute",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
  },
});

class CollapseMenu extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Box id="sideMenu" className={classes.root}>
        <Box className={classes.wrapMenuMobile}>
          <Box className={classes.wrapFirst}>
            <a>
              <img
                className={classes.btnAvatarMobile}
                src="/img/avatar.png"
                alt="avatar"
              />
              Đăng nhập
            </a>
            <img
              src="/img/next-session.png"
              className={"icon-arrow-right" + " " + classes.close}
              onClick={this.props.hideNavBar}
            />
          </Box>
          <Link
            activeClass="active"
            to="now"
            className={classes.link}
            spy={true}
            smooth={true}
            duration={500}
            onClick={this.props.hideNavBar}
          >
            Lịch chiếu
          </Link>
          <Link
            activeClass="active"
            to="cinemas"
            className={classes.link}
            spy={true}
            smooth={true}
            duration={500}
            onClick={this.props.hideNavBar}
          >
            Cụm rạp
          </Link>
          <Link
            activeClass="active"
            to="news"
            className={classes.link}
            spy={true}
            smooth={true}
            duration={500}
            onClick={this.props.hideNavBar}
          >
            Tin tức
          </Link>
          <Link
            activeClass="active"
            to="app"
            className={classes.link}
            spy={true}
            smooth={true}
            duration={500}
            onClick={this.props.hideNavBar}
          >
            Ứng dụng
          </Link>
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CollapseMenu);

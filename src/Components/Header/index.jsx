import React from "react";
import { Box } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import CollapseMenu from "./../CollapseMenu";
import useStyles from "./style";

export default function Header() {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Box className={styles.left}>
        <NavLink className="d-block" to="/">
          <img src="/img/web-logo.png" alt />
        </NavLink>
      </Box>
      <Box className={styles.center}>
        <Link
          activeClass="active"
          to="now"
          // className="menu"
          className={styles.link}
          spy={true}
          smooth={true}
          duration={500}
        >
          Lịch chiếu
        </Link>
        <Link
          activeClass="active"
          to="cinemas"
          // className="menu"
          className={styles.link}
          spy={true}
          smooth={true}
          duration={500}
        >
          Cụm rạp
        </Link>
        <Link
          activeClass="active"
          to="news"
          // className="menu"
          className={styles.link}
          spy={true}
          smooth={true}
          duration={500}
        >
          Tin tức
        </Link>
        <Link
          activeClass="active"
          to="app"
          // className="menu"
          className={styles.link}
          spy={true}
          smooth={true}
          duration={500}
        >
          Ứng dụng
        </Link>
      </Box>
      <Box className={styles.right}>
        <Box className={styles.account}>
          <img src="/img/avatar.png" alt />
          <NavLink className={styles.link} to="/login">
            Đăng Nhập
          </NavLink>
          <NavLink className={styles.link} to="/register">
            Đăng Ký
          </NavLink>
        </Box>
      </Box>
      {/* <Box className="leftmobile"></Box> */}
      <Box className={styles.rightmobile + " " + styles.menudropdown}>
        <img
          className="img-fluid"
          src="/img/menu-options.png"
          //   onClick={this.toggleNavBar}
        />
      </Box>
      <CollapseMenu />
    </Box>
  );
}

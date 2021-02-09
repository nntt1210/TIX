import { Box } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./style";

export default function CollapseMenu(props) {
  const styles = useStyles();
  return (
    <Box id="sideMenu" className={styles.root}>
      <Box className={styles.wrapMenuMobile}>
        <Box className={styles.wrapFirst}>
          <a>
            <img
              className={styles.btnAvatarMobile}
              src="/img/avatar.png"
              alt="avatar"
            />
            Đăng nhập
          </a>
          <img
            src="/img/next-session.png"
            className={"icon-arrow-right" + " " + styles.close}
            onClick={props.hideNavBar}
          />
        </Box>
        <Link
          activeClass="active"
          to="now"
          className={styles.link}
          spy={true}
          smooth={true}
          duration={500}
          onClick={props.hideNavBar}
        >
          Lịch chiếu
        </Link>
        <Link
          activeClass="active"
          to="cinemas"
          className={styles.link}
          spy={true}
          smooth={true}
          duration={500}
          onClick={props.hideNavBar}
        >
          Cụm rạp
        </Link>
        <Link
          activeClass="active"
          to="news"
          className={styles.link}
          spy={true}
          smooth={true}
          duration={500}
          onClick={props.hideNavBar}
        >
          Tin tức
        </Link>
        <Link
          activeClass="active"
          to="app"
          className={styles.link}
          spy={true}
          smooth={true}
          duration={500}
          onClick={props.hideNavBar}
        >
          Ứng dụng
        </Link>
      </Box>
    </Box>
  );
}

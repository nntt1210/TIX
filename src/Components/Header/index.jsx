import React from "react";
import { Box, MenuItem, Link, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";
// import { Link } from "react-scroll";
import CollapseMenu from "./../CollapseMenu";
import useStyles, { CssMenu } from "./style";
import { useDispatch, useSelector } from "react-redux";
import Tag from "./../Tag";
import { REMOVE_CREDENTIALS } from "./../../Containers/AdminTemplate/modules/constants";
import classNames from "classnames";

export default function Header() {
  const theme = useTheme();
  const styles = useStyles();
  const dispatch = useDispatch();
  const [accountAnchor, setAccountAnchor] = React.useState(null);
  const userLogin = useSelector((state) => state.userLoginReducer.login);
  const links = [
    { title: "Lịch Chiếu", path: "#movieList", target: "_self" },
    { title: "Cụm Rạp", path: "#scheduleCinema", target: "_self" },
  ];

  const createNavlinks = () => {
    const navLinks = [];
    for (let i = 0; i < 2; i++) {
      navLinks.push(
        <Link
          href={links[i].path}
          className={styles.link}
          key={i}
          variant="subtitle2"
          underline="hover">
          {links[i].title}
        </Link>
      );
    }
    // return <Box className={styles.links}>{navLinks}</Box>;
    return navLinks;
  };

  const handleClick = (event) => {
    setAccountAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAccountAnchor(null);
  };

  const handleLogout = () => {
    dispatch({
      type: REMOVE_CREDENTIALS,
      payload: "",
    });
    localStorage.removeItem("userLogin");
    handleClose();
  };

  return (
    <Box className={styles.root}>
      <Box className={styles.left}>
        <NavLink className="d-block" to="/">
          <Avatar variant="square" src="/img/web-logo.png" alt="logo" />
        </NavLink>
      </Box>
      <Box className={styles.center}>{createNavlinks()}</Box>
      <Box className={styles.right}>
        {userLogin ? (
          <>
            {userLogin.maLoaiNguoiDung === "QuanTri" ? (
              <NavLink
                to="/admin"
                className={classNames(styles.icon + " " + styles.navLink)}
              >
                <Tag
                  iconElement={<SupervisorAccountIcon fontSize="large" />}
                  color={theme.color.orange.light}
                  hoverColor={theme.color.yellow.light}
                  title="Admin"
                />
              </NavLink>
            ) : (
              <></>
            )}
            {userLogin.maLoaiNguoiDung === "KhachHang" ? (
              <>
                <Box
                  className={styles.signInUp}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <Tag
                    iconElement={<AccountCircleIcon fontSize="large" />}
                    color={theme.color.orange.light}
                    hoverColor={theme.color.orange.light}
                    title={userLogin.hoTen}
                  />
                </Box>
                <CssMenu
                  id="simple-menu"
                  anchorEl={accountAnchor}
                  keepMounted
                  open={Boolean(accountAnchor)}
                  onClose={handleClose}
                >
                  <NavLink className={styles.navLink} to="/account-detail">
                    <MenuItem onClick={handleClose}>
                      Thông tin tài khoản
                    </MenuItem>
                  </NavLink>
                  <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
                </CssMenu>
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <Box className={styles.signInUp}>
            <NavLink className={styles.navLink} to="/signin">
              <Tag
                iconElement={<AccountCircleIcon fontSize="large" />}
                color={theme.color.gray.main}
                hoverColor={theme.color.orange.light}
                title="Đăng nhập"
              />
            </NavLink>
          </Box>
        )}
      </Box>
      <Box className={styles.collapseMenu}>
        <CollapseMenu links={links} />
      </Box>
      {/* <Box className="leftmobile"></Box> */}
      {/* <Box className={styles.rightmobile + " " + styles.menudropdown}>
        <img
          className="img-fluid"
          src="/img/menu-options.png"
          //   onClick={this.toggleNavBar}
        />
      </Box>
      <CollapseMenu /> */}
    </Box>
  );
}

import React from "react";
import { Box, MenuItem, Link } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { NavLink } from "react-router-dom";
// import { Link } from "react-scroll";
import CollapseMenu from "./../CollapseMenu";
import useStyles, { CssMenu } from "./style";
import { useDispatch, useSelector } from "react-redux";
import Tag from "./../Tag";
import { REMOVE_CREDENTIALS } from "./../../Containers/AdminTemplate/modules/constants";

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
        >
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
          <img src="/img/web-logo.png" alt="logo" />
        </NavLink>
      </Box>
      <Box className={styles.center}>{createNavlinks()}</Box>
      <Box className={styles.right}>
        {/* <Box className={styles.account}>
          <img src="/img/avatar.png" alt />
          <NavLink className={styles.link} to="/signin">
            Đăng Nhập
          </NavLink>
          <NavLink className={styles.link} to="/signup">
            Đăng Ký
          </NavLink>
        </Box> */}
        {userLogin ? (
          <>
            {userLogin.maLoaiNguoiDung === "QuanTri" ? (
              <NavLink to="/admin" className={styles.icon}>
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
              <NavLink to="/account-detail">
                <MenuItem onClick={handleClose}>Thông tin tài khoản</MenuItem>
              </NavLink>
              <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
            </CssMenu>
          </>
        ) : (
          <Box className={styles.signInUp}>
            <NavLink to="/signin">
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

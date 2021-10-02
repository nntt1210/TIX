import React from "react";
import { Link, Route, Switch, Redirect, useLocation } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import { Container, Box, MenuList, MenuItem, Divider } from "@material-ui/core";
import MovieRoundedIcon from "@material-ui/icons/MovieRounded";
import GroupIcon from "@material-ui/icons/Group";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Tag from "../../../Components/Tag";
// import CollapseMenu from "./../../Components/CollapseMenu";
// import BackToTop from "../../components/BackToTop";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import UserManagement from "../../../Components/UserManagement";
import MovieManagement from "../../../Components/MovieManagement";
import ShowTimeManagement from "../../../Components/ShowTimeManagement";
import PersonalInfo from "../../../Components/PersonalInfo";
import { actGetAccountsTypeApi } from "../modules/action";
import * as ActionType from "../modules/constants";
import { getAccountInfo } from "../../AuthPage/modules/action";
// import routes from "./routes";

const Admin = ({ match }) => {
  const { url } = match;
  console.log(url);
  const location = useLocation();
  const styles = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLoginReducer.login);

  const links = [
    { title: "Trang chủ", path: "/home", target: "_blank" },
    {
      title: "Quản lý người dùng",
      path: `${url}/user-management`,
      target: "_self",
    },
    { title: "Quản lý phim", path: `${url}/movie-management`, target: "_self" },
    {
      title: "Quản lý lịch chiếu",
      path: `${url}/showtime-management`,
      target: "_self",
    },
    {
      title: "Thông tin cá nhân",
      path: `${url}/personal-info`,
      target: "_self",
    },
    { title: "Đăng xuất", path: "/signin", target: "_self" },
  ];

  useEffect(() => {
    dispatch(getAccountInfo(user, { taiKhoan: user.taiKhoan }));
  }, [dispatch, user]);

  useEffect(() => {
    dispatch(actGetAccountsTypeApi());
    console.log("hello");
  }, [dispatch]);

  const resetState = () => {
    dispatch({
      type: ActionType.RESET_STATE,
    });
  };

  const handleLogout = () => {
    dispatch({
      type: ActionType.REMOVE_CREDENTIALS,
      payload: "",
    });
    localStorage.removeItem("userLogin");
    resetState();
  };

  // const showLayoutAdmin = () => {
  //   if (routes && routes.length > 0) {
  //     console.log(routes);
  //     return routes.map((item, index) => {
  //       return (
  //         <Route key={index} path={item.path} component={item.component} />
  //       );
  //     });
  //   }
  // };

  return (
    <Container className={styles.root}>
      <Box className={styles.leftPanel}>
        <MenuList className={styles.list}>
          <MenuItem
            component={Link}
            to={links[0].path}
            target={links[0].target}
            className={styles.listItem}
          >
            <Tag
              iconElement={<MovieRoundedIcon fontSize="large" />}
              title={links[0].title}
              color={theme.color.white.main}
              hoverColor="none"
            />
          </MenuItem>
          <Divider classes={{ root: styles.divider }} />
          <MenuItem
            component={Link}
            to={links[1].path}
            // target={links[1].target}
            className={styles.listItem}
            classes={{ selected: styles.selected }}
            selected={location.pathname === links[1].path}
            // onClick={() => resetState()}
          >
            <Tag
              iconElement={<GroupIcon fontSize="large" />}
              title={links[1].title}
              color={theme.color.white.main}
              hoverColor="none"
            />
          </MenuItem>
          <MenuItem
            component={Link}
            to={links[2].path}
            // target={links[2].target}
            className={styles.listItem}
            classes={{ selected: styles.selected }}
            selected={location.pathname === links[2].path}
            // onClick={() => resetState()}
          >
            <Tag
              iconElement={<LocalMoviesIcon fontSize="large" />}
              title={links[2].title}
              color={theme.color.white.main}
              hoverColor="none"
            />
          </MenuItem>
          <MenuItem
            component={Link}
            to={links[3].path}
            // target={links[3].target}
            className={styles.listItem}
            classes={{ selected: styles.selected }}
            selected={location.pathname === links[3].path}
            // onClick={() => resetState()}
          >
            <Tag
              iconElement={<ScheduleIcon fontSize="large" />}
              title={links[3].title}
              color={theme.color.white.main}
              hoverColor="none"
            />
          </MenuItem>
          <Divider classes={{ root: styles.divider }} />
          <MenuItem
            component={Link}
            to={links[4].path}
            // target={links[4].target}
            className={styles.listItem}
            classes={{ selected: styles.selected }}
            selected={location.pathname === links[4].path}
            // onClick={() => resetState()}
          >
            <Tag
              iconElement={<AccountCircleIcon fontSize="large" />}
              title="Thông tin cá nhân"
              color={theme.color.white.main}
              hoverColor="none"
            />
          </MenuItem>
          <MenuItem
            component={Link}
            to={links[5].path}
            // target={links[5].target}
            className={styles.listItem}
            onClick={handleLogout}
          >
            <Tag
              iconElement={<ExitToAppIcon fontSize="large" />}
              title={links[5].title}
              color={theme.color.white.main}
              hoverColor="none"
            />
          </MenuItem>
        </MenuList>
      </Box>

      <Box className={styles.info}>
        <Box className={styles.collapseMenu}>
          {/* <CollapseMenu links={links} /> */}
        </Box>
        <Switch>
          <Route exact path={url}>
            <Redirect to={`${url}/user-management`} />
          </Route>
        </Switch>

        <Switch>
          <Route exact path={url}>
            <Redirect to={`${url}/user-management`} />
          </Route>
          <Route path={`${url}/user-management`} component={UserManagement} />
          <Route path={`${url}/movie-management`} component={MovieManagement} />
          <Route
            path={`${url}/showtime-management`}
            component={ShowTimeManagement}
          />
          <Route path={`${url}/personal-info`} component={PersonalInfo} />
          {/* {showLayoutAdmin()} */}
        </Switch>
        {/* <BackToTop showBelow={300} /> */}
      </Box>
    </Container>
  );
};

export default Admin;

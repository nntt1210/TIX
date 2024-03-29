import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Switch, Redirect, useLocation } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import { Container, Box, MenuList, MenuItem, Divider } from '@mui/material';
import MovieRoundedIcon from '@mui/icons-material/MovieRounded';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PropTypes from 'prop-types';

// import CollapseMenu from "./../../Components/CollapseMenu";
// import BackToTop from "../../components/BackToTop";

import Tag from '../../../components/Tag';
import UserManagement from '../../../components/UserManagement';
import MovieManagement from '../../../components/MovieManagement';
import ShowTimeManagement from '../../../components/ShowTimeManagement';
import PersonalInfo from '../../../components/PersonalInfo';
import useStyles from './style';
import { actGetAccountsTypeApi } from '../modules/action';
import * as ActionType from '../modules/constants';
import { getAccountInfo } from '../../AuthPage/modules/action';
// import routes from "./routes";

const Admin = ({ match }) => {
  const { url } = match;
  const location = useLocation();
  const styles = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLoginReducer.login);

  const links = [
    { title: 'Trang chủ', path: '/home', target: '_blank' },
    {
      title: 'Quản lý người dùng',
      path: `${url}/user-management`,
      target: '_self',
    },
    { title: 'Quản lý phim', path: `${url}/movie-management`, target: '_self' },
    {
      title: 'Quản lý lịch chiếu',
      path: `${url}/showtime-management`,
      target: '_self',
    },
    {
      title: 'Thông tin cá nhân',
      path: `${url}/personal-info`,
      target: '_self',
    },
    { title: 'Đăng xuất', path: '/signin', target: '_self' },
  ];

  useEffect(() => {
    dispatch(getAccountInfo(user, { taiKhoan: user.taiKhoan }));
  }, [dispatch, user]);

  useEffect(() => {
    dispatch(actGetAccountsTypeApi());
  }, [dispatch]);

  const resetState = () => {
    dispatch({
      type: ActionType.RESET_STATE,
    });
  };

  const handleLogout = () => {
    dispatch({
      type: ActionType.REMOVE_CREDENTIALS,
      payload: '',
    });
    localStorage.removeItem('userLogin');
    resetState();
  };

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
              iconElement={<MovieRoundedIcon fontSize='large' />}
              title={links[0].title}
              color={theme.color.white.main}
              hoverColor='none'
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
              iconElement={<GroupIcon fontSize='large' />}
              title={links[1].title}
              color={theme.color.white.main}
              hoverColor='none'
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
              iconElement={<LocalMoviesIcon fontSize='large' />}
              title={links[2].title}
              color={theme.color.white.main}
              hoverColor='none'
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
              iconElement={<ScheduleIcon fontSize='large' />}
              title={links[3].title}
              color={theme.color.white.main}
              hoverColor='none'
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
              iconElement={<AccountCircleIcon fontSize='large' />}
              title='Thông tin cá nhân'
              color={theme.color.white.main}
              hoverColor='none'
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
              iconElement={<ExitToAppIcon fontSize='large' />}
              title={links[5].title}
              color={theme.color.white.main}
              hoverColor='none'
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

Admin.propTypes = {
  match: PropTypes.object,
};

export default Admin;

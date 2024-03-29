import React from 'react';
import { useDispatch } from 'react-redux';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import useStyles from './style';
import UserService from './../../../services/user';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/' underline='hover'>
        TIX
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUp(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userService = new UserService();
  const handleSubmit = (user) => {
    dispatch(
      userService
        .signUp(user)
        .then(() => {
          alert('Đăng kí thành công');
          props.history.replace('signin');
        })
        .catch((err) => {
          alert(err.response.data);
        })
    );
  };

  return (
    <Container maxWidth='xs'>
      <CssBaseline />
      <Box className={classes.paper}>
        <Link href='/home' underline='hover'>
          <Avatar
            variant='square'
            src='/img/web-logo.png'
            className={classes.avatar}
          ></Avatar>
        </Link>

        <Typography component='h1' variant='h5'>
          Đăng Ký
        </Typography>
        <Formik
          initialValues={{
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: 'GP00',
            maLoaiNguoiDung: 'KhachHang',
            hoTen: '',
          }}
          // validationSchema={signUpSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange }) => (
            <Form className={classes.form} noValidate autoComplete='off'>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete='fname'
                    name='hoTen'
                    variant='outlined'
                    required
                    fullWidth
                    // id="firstName"
                    label='Họ tên'
                    onChange={handleChange}
                    // autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    // id="lastName"
                    label='Tên tài khoản'
                    name='taiKhoan'
                    onChange={handleChange}
                    // autoComplete="lname"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    name='matKhau'
                    label='Mật khẩu'
                    type='password'
                    onChange={handleChange}
                    // id="password"
                    // autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    // id="email"
                    label='Email'
                    name='email'
                    onChange={handleChange}
                    // autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    // id="email"
                    label='Số điện thoại'
                    name='soDt'
                    onChange={handleChange}
                    // autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value='allowExtraEmails' color='primary' />
                    }
                    label='Nhận thông báo từ TIX qua email'
                  />
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
              >
                ĐĂNG KÝ
              </Button>
              <Grid container justifyContent='flex-end'>
                <Grid item>
                  <Link href='/signin' variant='body2' underline='hover'>
                    Đã có tài khoản ? Đăng nhập ngay
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
SignUp.propTypes = {
  history: PropTypes.object,
};

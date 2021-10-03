import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Formik, Form } from "formik";

import Container from "@material-ui/core/Container";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import UserService from "./../../../Services/user";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        TIX
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
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
        .then((res) => {
          //console.log(res);
          alert("Đăng kí thành công");
          props.history.replace("signin");
        })
        .catch((err) => {
          console.log(user);
          console.log(err.response.data);
          alert(err.response.data);
        })
    );
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Box className={classes.paper}>
        <Avatar
          variant="square"
          src="/img/web-logo.png"
          className={classes.avatar}
        ></Avatar>
        <Typography component="h1" variant="h5">
          Đăng Ký
        </Typography>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "GP00",
            maLoaiNguoiDung: "KhachHang",
            hoTen: "",
          }}
          // validationSchema={signUpSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange }) => (
            <Form className={classes.form} noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="hoTen"
                    variant="outlined"
                    required
                    fullWidth
                    // id="firstName"
                    label="Họ tên"
                    onChange={handleChange}
                    // autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    // id="lastName"
                    label="Tên tài khoản"
                    name="taiKhoan"
                    onChange={handleChange}
                    // autoComplete="lname"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="matKhau"
                    label="Mật khẩu"
                    type="password"
                    onChange={handleChange}
                    // id="password"
                    // autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    // id="email"
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    // autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    // id="email"
                    label="Số điện thoại"
                    name="soDt"
                    onChange={handleChange}
                    // autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="Nhận thông báo từ TIX qua email"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                ĐĂNG KÝ
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/signin" variant="body2">
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

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
import { actSignInApi } from "../modules/action";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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

export default function SignIn() {
  const classes = useStyles();
  const userLogin = useSelector((state) => state.userLoginReducer.login);

  let dispatch = useDispatch();
  const handleSubmit = (user) => {
    dispatch(actSignInApi(user));
  };

  if (!userLogin) {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className={classes.paper}>
          <Link href="/home">
            <Avatar
              variant="square"
              src="/img/web-logo.png"
              className={classes.avatar}
            ></Avatar>
          </Link>

          <Typography component="h1" variant="h5">
            Đăng Nhập
          </Typography>
          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: "",
            }}
            onSubmit={handleSubmit}
          >
            {(formikProps) => (
              <Form className={classes.form} noValidate autoComplete="off">
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  // id="email"
                  label="Tên tài khoản"
                  name="taiKhoan"
                  onChange={formikProps.handleChange}
                  // autoComplete="email"
                  // autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="matKhau"
                  label="Mật khẩu"
                  type="password"
                  onChange={formikProps.handleChange}
                  // id="password"
                  // autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Lưu mật khẩu"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  ĐĂNG NHẬP
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Quên mật khẩu ?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Chưa có tài khoản ? Đăng ký ngay"}
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  } else return <Redirect to="/home" />;
}

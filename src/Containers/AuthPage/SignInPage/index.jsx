import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Formik, Form } from "formik";

import Container from "@mui/material/Container";
import useStyles from "./style";
import { actSignInApi } from "../modules/action";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/" underline="hover">
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
          <Link href="/home" underline="hover">
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
                    <Link href="#" variant="body2" underline="hover">
                      Quên mật khẩu ?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2" underline="hover">
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

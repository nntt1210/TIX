import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import Loader from "./../Loader";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  actEditUser,
  actAddUser,
} from "./../../Containers/AdminTemplate/modules/action";

import * as ActionType from "./../../Containers/AdminTemplate/modules/constants";

export default function UserForm() {
  const styles = useStyles();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userLoginReducer.login);
  const accountTypes = useSelector((state) => state.accountsTypeReducer.data);

  const isEdited = useSelector((state) => state.accountsReducer.isEdited);
  const editedAccount = useSelector((state) => state.accountsReducer.edited);

  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   // console.log(loading);
  //   // setLoading(true);
  //   if (accountTypes) setLoading(false);
  //   console.log(loading);
  // }, [loading]);

  const checkLoading = () => {
    if (accountTypes) setLoading(false);
  };

  // useEffect(() => {
  //   dispatch(actGetAccountsTypeApi());
  //   console.log("hello");
  // }, [dispatch, user]);
  const reset = () => {
    dispatch({ type: ActionType.GET_EDIT_STATUS, payload: false });
    dispatch({ type: ActionType.GET_EDITED_USER, payload: null });
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: editedAccount.taiKhoan,
      matKhau: editedAccount.matKhau,
      email: editedAccount.email,
      soDt: editedAccount.soDt,
      maNhom: "GP00",
      maLoaiNguoiDung: editedAccount.maLoaiNguoiDung,
      hoTen: editedAccount.hoTen,
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Vui lòng nhập tên tài khoản"),
      hoTen: Yup.string().required("Vui lòng nhập họ và tên"),
      matKhau: Yup.string().required("Vui lòng không bỏ trống mật khẩu"),
      maLoaiNguoiDung: Yup.string().required("Vui lòng chọn loại người dùng"),
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Vui lòng nhập email"),
      soDt: Yup.string()
        .required("Vui lòng nhập số điện thoại")
        .matches(/^[0-9]*$/, "Số điện thoại không hợp lệ"),
    }),
    onSubmit: (values) => {
      isEdited
        ? dispatch(actEditUser(values, user.accessToken))
        : dispatch(actAddUser(values, user.accessToken));
    },
  });
  if (loading) return <Loader />;
  else
    return (
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <Box className={styles.content}>
          <Typography className={styles.title} component="h1" variant="h5">
            Quản lý người dùng
          </Typography>

          <Box className={styles.info}>
            <TextField
              className={styles.input}
              id="taiKhoan"
              name="taiKhoan"
              label="Tên tài khoản"
              // // variant="outlined"
              type="text"
              size="small"
              disabled={isEdited}
              value={formik.values.taiKhoan}
              onChange={formik.handleChange}
              // InputLabelProps={{
              //   shrink: true,
              // }}
              {...(formik.errors.taiKhoan && {
                error: true,
                helperText: formik.errors.taiKhoan,
              })}
            />

            <TextField
              className={styles.input}
              id="hoTen"
              name="hoTen"
              label="Họ và tên"
              // variant="outlined"
              type="text"
              size="small"
              value={formik.values.hoTen}
              onChange={formik.handleChange}
              // InputLabelProps={{
              //   shrink: true,
              // }}
              {...(formik.errors.hoTen && {
                error: true,
                helperText: formik.errors.hoTen,
              })}
            />

            <FormControl
              // variant="outlined"
              size="small"
              className={styles.dropDown}
            >
              <InputLabel className={styles.userType}>
                Loại người dùng
              </InputLabel>
              <Select
                id="maLoaiNguoiDung"
                name="maLoaiNguoiDung"
                value={formik.values.maLoaiNguoiDung}
                classes={{
                  select: styles.select,
                  icon: styles.icon,
                }}
                label="Loại người dùng"
                onChange={formik.handleChange}
              >
                {accountTypes
                  ? accountTypes.map((type) => (
                      <MenuItem
                        dense
                        key={type.maLoaiNguoiDung}
                        value={type.maLoaiNguoiDung}
                        classes={{ root: styles.dropDownItem }}
                      >
                        {type.tenLoai}
                      </MenuItem>
                    ))
                  : checkLoading()}
              </Select>
              {formik.errors.maLoaiNguoiDung ? (
                <FormHelperText>{formik.errors.maLoaiNguoiDung}</FormHelperText>
              ) : null}
            </FormControl>

            <TextField
              className={styles.input}
              id="matKhau"
              name="matKhau"
              label="Mật khẩu"
              // variant="outlined"
              type="password"
              size="small"
              value={formik.values.matKhau}
              onChange={formik.handleChange}
              // InputLabelProps={{
              //   shrink: true,
              // }}
              {...(formik.errors.matKhau && {
                error: true,
                helperText: formik.errors.matKhau,
              })}
            />

            <TextField
              className={styles.input}
              id="email"
              name="email"
              label="Email"
              // variant="outlined"
              type="email"
              size="small"
              value={formik.values.email}
              onChange={formik.handleChange}
              // InputLabelProps={{
              //   shrink: true,
              // }}
              {...(formik.errors.email && {
                error: true,
                helperText: formik.errors.email,
              })}
            />

            <TextField
              className={styles.input}
              id="soDt"
              name="soDt"
              label="Số điện thoại"
              // variant="outlined"
              type="text"
              size="small"
              value={formik.values.soDt}
              onChange={formik.handleChange}
              // InputLabelProps={{
              //   shrink: true,
              // }}
              {...(formik.errors.soDt && {
                error: true,
                helperText: formik.errors.soDt,
              })}
            />
          </Box>
        </Box>

        <Button
          variant="contained"
          className={styles.button}
          type="submit"
          // type="button"
        >
          {isEdited ? "Cập nhật" : "Thêm mới"}
        </Button>
        {isEdited ? (
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            style={{ marginLeft: "10px" }}
            type="button"
            onClick={() => reset()}
          >
            Reset
          </Button>
        ) : (
          ""
        )}
      </form>
    );
}

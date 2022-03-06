import React from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Box } from "@mui/material";
import useStyles from "./style";
import { useFormik } from "formik";
import * as Yup from "yup";
import { actEditUser } from "./../../Containers/AdminTemplate/modules/actions/accounts";
import { useDispatch, useSelector } from "react-redux";

const ProfileCard = (props) => {
  const styles = useStyles();
  const { account } = props;
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLoginReducer.login);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: account.taiKhoan,
      matKhau: account.matKhau,
      email: account.email,
      soDt: account.soDT,
      maNhom: account.maNhom,
      maLoaiNguoiDung: user.maLoaiNguoiDung,
      hoTen: account.hoTen,
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Vui lòng nhập tên tài khoản"),
      hoTen: Yup.string().required("Vui lòng nhập họ và tên"),
      matKhau: Yup.string().required("Vui lòng không bỏ trống mật khẩu"),
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Vui lòng nhập email"),
      soDt: Yup.string()
        .required("Vui lòng nhập số điện thoại")
        .matches(/^[0-9]*$/, "Số điện thoại không hợp lệ"),
    }),
    onSubmit: (values) => {
      dispatch(actEditUser(values, user.accessToken));
    },
  });
  return (
    <Card className={styles.root}>
      <CardActionArea>
        {/* <CardMedia
          className={styles.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
        <Avatar className={styles.avatar} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {account.hoTen}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Tài khoản: {account.taiKhoan}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            SDT: {account.soDT}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Email: {account.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          className={styles.editButton}
          size="small"
          color="primary"
          onClick={handleClickOpen}
        >
          Chỉnh sửa
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Chỉnh sửa</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Để chỉnh sửa thông tin tài khoản, bạn vui lòng sửa thông tin ở các
              mục dưới đây
            </DialogContentText>
            <form autoComplete="off">
              <Box className={styles.info}>
                <TextField
                  className={styles.input}
                  id="taiKhoan"
                  name="taiKhoan"
                  label="Tên tài khoản"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  type="text"
                  size="small"
                  disabled
                  value={formik.values.taiKhoan}
                  onChange={formik.handleChange}
                />

                <TextField
                  className={styles.input}
                  id="hoTen"
                  name="hoTen"
                  label="Họ và tên"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  type="text"
                  size="small"
                  value={formik.values.hoTen}
                  onChange={formik.handleChange}
                  {...(formik.errors.hoTen && {
                    error: true,
                    helperText: formik.errors.hoTen,
                  })}
                />

                <TextField
                  className={styles.input}
                  id="email"
                  name="email"
                  label="Email"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  type="email"
                  size="small"
                  value={formik.values.email}
                  onChange={formik.handleChange}
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
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  type="text"
                  size="small"
                  value={formik.values.soDt}
                  onChange={formik.handleChange}
                  {...(formik.errors.soDt && {
                    error: true,
                    helperText: formik.errors.soDt,
                  })}
                />
                <TextField
                  className={styles.input}
                  id="matKhau"
                  name="matKhau"
                  label="Mật khẩu"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  type="password"
                  size="small"
                  value={formik.values.matKhau}
                  onChange={formik.handleChange}
                  {...(formik.errors.matKhau && {
                    error: true,
                    helperText: formik.errors.matKhau,
                  })}
                />
              </Box>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Thoát
            </Button>
            <Button
              // onClick={handleClose}
              color="primary"
              onClick={formik.handleSubmit}
              className={styles.editButton}
            >
              Cập nhật
            </Button>
          </DialogActions>
        </Dialog>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;

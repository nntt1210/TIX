import api from '../api';
// import * as yup from "yup";

// export const signUpSchema = yup.object().shape({
//   taiKhoan: yup.string().required("*Bắt buộc"),
//   matKhau: yup.string().required("*Bắt buộc"),
//   email: yup.string().required("*Bắt buộc").email("*Email không hợp lệ"),
//   soDt: yup
//     .string()
//     .required("*Bắt buộc")
//     .matches(/^[0-9]+$/, "Số điện thoại không hợp lệ"),

//   hoTen: yup.string().required("*Bắt buộc"),
// });
class UserService {
  signIn(data) {
    return api.post(`/QuanLyNguoiDung/DangNhap`, data);
  }
  signUp(data) {
    return api.post(`/QuanLyNguoiDung/DangKy`, data);
  }
  fetchAccountInfo(token, data) {
    return api.post(`/QuanLyNguoiDung/ThongTinTaiKhoan`, data, {
      Authorization: `Bearer ${token}`,
    });
  }
  editAccountInfo(data, token) {
    return api.put('/QuanLyNguoiDung/CapNhatThongTinNguoiDung', data, {
      Authorization: `Bearer ${token}`,
    });
  }
}

export default UserService;

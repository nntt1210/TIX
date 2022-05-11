import api from '../api';
class AdminService {
  fetchAccounts(keyWord) {
    const url = keyWord
      ? `/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP09&tuKhoa=${keyWord}`
      : `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09`;
    return api.get(url);
  }
  fetchAccountTypes() {
    return api.get('/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung');
  }
  addUser(data, token) {
    return api.post('/QuanLyNguoiDung/ThemNguoiDung', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  deleteUser(idUser, token) {
    return api.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${idUser}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  editUser(data, token) {
    return api.put('/QuanLyNguoiDung/CapNhatThongTinNguoiDung', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  editMovie(data, token) {
    return api.post('/QuanLyPhim/CapNhatPhim', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  addMovie(data, token) {
    return api.post('/QuanLyPhim/ThemPhim', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  deleteMovie(idMovie, token) {
    return api.delete(`/QuanLyPhim/XoaPhim?MaPhim=${idMovie}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  upLoadPoster(data) {
    return api.post('/QuanLyPhim/UploadHinhAnhPhim', data);
  }

  addShowTime(data, token) {
    return api.post('/QuanLyDatVe/TaoLichChieu', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
export default AdminService;

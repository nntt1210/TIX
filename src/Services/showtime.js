import api from '../api';
class ShowTimeService {
  fetchAllCinemaShowTimes() {
    return api.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09`);
  }
  fetchMovieShowTimes(movieId) {
    return api.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
  }
}

export default ShowTimeService;

import api from "./../Api";
class ShowTimeService {
  fetchAllCinemaShowTimes() {
    return api.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03`);
  }
  fetchMovieShowTimes(movieId) {
    return api.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
  }
}

export default ShowTimeService;

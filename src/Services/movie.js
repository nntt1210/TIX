import api from "./../Api";
class MovieService {
  fetchMovies(keyWord) {
    const url = keyWord
      ? `/QuanLyPhim/LayDanhSachPhim?maNhom=GP00&tenPhim=${keyWord}`
      : `/QuanLyPhim/LayDanhSachPhim?maNhom=GP00`;
    return api.get(url);
  }
  fetchAllMovie() {
    return api.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP00");
  }
  fetchMovieShowTimes(movieId) {
    return api.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
  }
  fetchMovieListPagination(pageNumber, itemsPerPage) {
    return api.get(
      `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP00&soTrang=${pageNumber}&soPhanTuTrenTrang=${itemsPerPage}`
    );
  }
}

export default MovieService;

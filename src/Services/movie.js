import api from "./../Api";
class MovieService {
  fetchMovies(keyWord) {
    const url = keyWord
      ? `/QuanLyPhim/LayDanhSachPhim?maNhom=GP03&tenPhim=${keyWord}`
      : `/QuanLyPhim/LayDanhSachPhim?maNhom=GP03`;
    return api.get(url);
  }
  fetchAllMovie() {
    return api.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP03");
  }
  fetchMovieShowTimes(movieId) {
    return api.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
  }
  fetchMovieListPagination(pageNumber, itemsPerPage) {
    return api.get(
      `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${pageNumber}&soPhanTuTrenTrang=${itemsPerPage}`
    );
  }
}

export default MovieService;

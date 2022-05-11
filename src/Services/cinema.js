import api from '../api';

class CinemaService {
  fetchCinemaSystemInfo(id) {
    const url = id
      ? `/QuanLyRap/LayThongTinHeThongRap?maHeThongRap=${id}`
      : `/QuanLyRap/LayThongTinHeThongRap`;
    return api.get(url);
  }
  fetchCinemaInfo(systemId) {
    return api.get(
      `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${systemId}`
    );
  }
  fetchCinemaTime(systemId) {
    return api.get(
      `/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${systemId}&maNhom=GP09`
    );
  }
}

export default CinemaService;

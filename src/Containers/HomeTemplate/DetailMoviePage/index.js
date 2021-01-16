import React, { Component } from "react";
import { connect } from "react-redux";
import { actDetailMovieApi } from "./modules/action";

class DetailMoviePage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchDetailMovie(id);
    // console.log("componentDidMount");
  }

  render() {
    if (this.props.detailMovie) {
      const {
        maPhim,
        tenPhim,
        trailer,
        hinhAnh,
        ngayKhoiChieu,
        danhGia,
        moTa,
      } = this.props.detailMovie;
      return (
        <section className="movie__times">
          <div className="movie__content">
            <div className="carousel__item">
              <div className="carousel__img">
                <img className="img__background" src={hinhAnh} alt={tenPhim} />
              </div>
              <div className="blur__overlay"></div>
              {/* <div className="playBtn__overlay"></div> */}
            </div>
            <div className="movie__details myContainer">
              <div className="row align-items-center">
                <div className="movieThumbnail col-3">
                  <div className="movieThumbnail__img">
                    <a
                      className="img__link"
                      href="#"
                      style={{
                        backgroundImage: `url(${hinhAnh})`,
                      }}
                    ></a>
                    <div className="playBtn__overlay">
                      <a
                        href="#"
                        data-target="#movieTrailer"
                        data-toggle="modal"
                        className="play__link"
                      >
                        <img
                          className="img-fluid"
                          src="/img/play-video.png"
                          alt="play trailer"
                        />
                      </a>
                    </div>
                    <div className="publish__date"></div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row align-items-center main-title-detail">
                    <div className="col-9 col-md-12">
                      <p>{new Date(ngayKhoiChieu).toLocaleDateString()}</p>
                      <h6 className="title">
                        <span className="showing__age">C13</span>
                        {tenPhim}
                      </h6>
                      <p></p>
                    </div>
                    <div className="col-3 col-md-12 text-center text-md-left">
                      <a href="#" className="btnBuyTicket">
                        Mua vé
                      </a>
                    </div>
                  </div>
                </div>
                <div className="detail__point col-3 d-flex flex-column align-items-center mx-auto">
                  <div className="percentage">
                    <div className="circle-border"></div>
                    <div className="point-group">
                      <div
                        className="bar"
                        style={{
                          clipPath:
                            "polygon(50% 0%, 100% 0px, 100% 100%, 0px 100%, 0px 0px, 0px 37.5676%, 50% 50%)",
                        }}
                      ></div>
                    </div>
                    <span className="point">{danhGia}</span>
                  </div>
                  <div className="star">
                    <img src="/img/star1.png" alt="Star" />
                    <img src="/img/star1.png" alt="Star" />
                    <img src="/img/star1.png" alt="Star" />
                    <img src="/img/star1.png" alt="Star" />
                    <img src="/img/star1.png" alt="Star" />
                  </div>
                  <p className="rating">37 người đánh giá</p>
                </div>
              </div>
            </div>
          </div>
          <div className="detail__times">
            <div className="myContainer">
              <ul className="nav nav-tabs navigation__tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#lichChieu"
                    role="tab"
                    aria-selected="true"
                  >
                    Lịch chiếu
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#thongTin"
                    role="tab"
                    aria-selected="false"
                  >
                    Thông tin
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#danhGia"
                    role="tab"
                    aria-selected="false"
                  >
                    Đánh giá
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="lichChieu"
                  role="tabpanel"
                  aria-labelledby="lichChieu-tab"
                >
                  <div className="detail">
                    <div className="detail__wrapper">
                      <ul className="detail__listOfDay"></ul>
                      <div className="nav detail__cinema" role="tablist"></div>
                      <div className="detail__showList tab-content"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="thongTin"
                  role="tabpanel"
                  aria-labelledby="thongTin-tab"
                >
                  <div className="movie__info">
                    <div className="myContainer row">
                      <div className="col-12 col-md-6">
                        <div className="rowInfo">
                          <div className="titleInfo">Ngày công chiếu</div>
                          <div className="contentInfo">
                            {new Date(ngayKhoiChieu).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="rowInfo">
                          <div className="titleInfo">Đạo diễn</div>
                          <div className="contentInfo"></div>
                        </div>
                        <div className="rowInfo">
                          <div className="titleInfo">Diễn viên</div>
                          <div className="contentInfo"></div>
                        </div>
                        <div className="rowInfo">
                          <div className="titleInfo">Thể loại</div>
                          <div className="contentInfo"></div>
                        </div>
                        <div className="rowInfo">
                          <div className="titleInfo">Định dạng</div>
                          <div className="contentInfo">2D/Digital</div>
                        </div>
                        <div className="rowInfo">
                          <div className="titleInfo">Quốc Gia SX</div>
                          <div className="contentInfo">Việt Nam</div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="rowInfo">
                          <div className="titleInfo">Nội dung</div>
                        </div>
                        <div className="rowInfo">
                          <p className="description">{moTa}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="danhGia"
                  role="tabpanel"
                  aria-labelledby="danhGia-tab"
                >
                  <div className="movie__discussion myContainer">
                    <div
                      className="discussion__input"
                      data-toggle="modal"
                      data-target="#reviewInput"
                    >
                      <div className="discuss__item">
                        <div className="row discuss__item--header">
                          <div className="text-center avatar"></div>
                          <div className="col pl-1 middle"></div>
                          <div className="text-right star__group">
                            <div className="star__group--default">
                              <i class="fa fa-star icon-star"></i>
                              <i class="fa fa-star icon-star"></i>
                              <i class="fa fa-star icon-star"></i>
                              <i class="fa fa-star icon-star"></i>
                              <i class="fa fa-star icon-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="discussion__area">
                      <div className="discuss__item">
                        <div className="row discuss__item--header"></div>
                        <div className="discuss__item--body"></div>
                        <div className="line"></div>
                        <div className="row discuss__item--footer"></div>
                      </div>
                      <div className="discuss__item"></div>
                      <div className="discuss__item"></div>
                      <div className="discuss__item"></div>
                      <div className="btnViewMore__container">
                        <button className="btnViewMore">XEM THÊM</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    } else return <div className="text-center">Loading...</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.detailMovieReducer.loading,
    detailMovie: state.detailMovieReducer.detailMovie,
    err: state.detailMovieReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetailMovie: (id) => {
      dispatch(actDetailMovieApi(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage);
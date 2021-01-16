import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { actListMovieApi, actListUpcomingMovieApi } from "./modules/action";

class ListMovieComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      trailer: null,
    };
  }

  setTrailer = (trailer) => {
    this.setState({
      trailer,
    });
  };

  componentDidMount() {
    this.props.fetchListMovie("GP09");
    this.props.fetchUpcomingMovie("GP10");
  }

  renderNowShowingMovie = () => {
    if (this.props.listMovie) {
      let arr = [];
      let currentIndex = 0;
      let length = this.props.listMovie.length;
      while (currentIndex < length) {
        let items = this.renderSlide(currentIndex, this.props.listMovie);
        currentIndex += 8;
        arr.push(items);
      }
      return arr.map((item, index) => {
        return (
          <div key={index} className="row">
            {item}
          </div>
        );
      });
    }
  };

  renderUpcomingMovie = () => {
    if (this.props.upcomingMovie) {
      let arr = [];
      let currentIndex = 0;
      let length = this.props.upcomingMovie.length;
      while (currentIndex < length) {
        let items = this.renderSlide(currentIndex, this.props.upcomingMovie);
        currentIndex += 8;
        arr.push(items);
      }
      return arr.map((item, index) => {
        return (
          <div key={index} className="row">
            {item}
          </div>
        );
      });
    }
  };

  renderSlide = (currentIndex, movie) => {
    var items = movie
      .slice(currentIndex, currentIndex + 8)
      .map((item, index) => {
        return (
          <div key={index} className="col-6 col-sm-4 col-md-3 movieThumbnail">
            <div className="movieThumbnail__img">
              <a
                className="img__link"
                href="#"
                style={{ backgroundImage: `url(${item.hinhAnh})` }}
              ></a>
              <div className="playBtn__overlay">
                <button
                  data-toggle="modal"
                  data-target="#movieTrailer1"
                  onClick={() => this.setTrailer(item.trailer)}
                >
                  <img src="img/play-video.png" />
                </button>
              </div>
            </div>

            <div className="movieThumbnail__title">
              <span className="movieThumbnail__age">C13</span>
              {item.tenPhim}
              <div className="playBtn__overlay btnContainer">
                <a className="btnBuyTicket" href="#">
                  Mua vé
                </a>
              </div>
            </div>
            <div className="movieThumbnail__rate">
              <span>{item.danhGia}</span>
              <div className="star">
                <img src="img/star1.png" />
                <img src="img/star1.png" />
                <img src="img/star1.png" />
                <img src="img/star1.png" />
                <img src="img/star1.png" />
              </div>
            </div>
          </div>
        );
      });
    return items;
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section id="now" className="comingSoon">
        <ul className="nav nav-tabs navCenter" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              data-target="#nowShowingFilms"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Đang Chiếu
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              data-target="#comingFilms"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Sắp Chiếu
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="nowShowingFilms"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div>
              <Slider {...settings}>{this.renderNowShowingMovie()}</Slider>
            </div>
          </div>
          <div
            className="tab-pane fade show"
            id="comingFilms"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div>
              <Slider {...settings}>{this.renderUpcomingMovie()}</Slider>
            </div>
          </div>
        </div>
        <div
          id="movieTrailer1"
          className="modal fade"
          aria-hidden="true"
          tabIndex={-1}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                {/* <button type="button" className="close" data-dismiss="modal">
                  <img src="./img/close.png" alt />
                </button> */}
                <iframe
                  id="iframe"
                  width="800"
                  height="500"
                  src={this.state.trailer}
                  frameBorder={0}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listMovie: state.listMovieReducer.data,
    upcomingMovie: state.listMovieReducer.nextData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListMovie: (groupID) => {
      dispatch(actListMovieApi(groupID));
    },
    fetchUpcomingMovie: (groupID) => {
      dispatch(actListUpcomingMovieApi(groupID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMovieComponent);

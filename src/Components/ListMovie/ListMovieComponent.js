import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { actListMovieApi, actListUpcomingMovieApi } from "./modules/action";
import { NavLink } from "react-router-dom";
import ButtonBuy from "../ButtonBuy";
import ButtonTrailer from "../ButtonTrailer";
import MovieItem from "../MovieItem";

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

  renderLink = (maPhim) => {
    return "/phim/" + maPhim;
  };

  renderSlide = (currentIndex, movie) => {
    var items = movie
      .slice(currentIndex, currentIndex + 8)
      .map((item, index) => {
        return (
          <MovieItem
            key={index}
            hinhAnh={item.hinhAnh}
            maPhim={item.maPhim}
            tenPhim={item.tenPhim}
            danhGia={item.danhGia}
            trailer={item.trailer}
          />
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
        <div className="myContainer">
          <ul className="nav nav-tabs navigation-tab" id="myTab" role="tablist">
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

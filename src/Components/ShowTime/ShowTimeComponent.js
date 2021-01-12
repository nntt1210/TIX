import React, { Component } from "react";
import { connect } from "react-redux";
import {
  actGetDetailListCinemaApi,
  actGetSystemCinemaApi,
} from "./modules/action";

class ShowTimeComponent extends Component {
  constructor(props) {
    super(props);
  }

  // async componentDidMount() {
  //   await this.props.getListCinema();
  //   console.log("Hihi");
  //   // if (this.props.listCinema) {
  //   //   for (let i = 0; i < this.props.listCinema.length; i++) {
  //   //     await this.loadDetailCinema(this.props.listCinema[i].maHeThongRap);
  //   //   }
  //   // }
  // }

  componentDidMount() {
    console.log(this.props.getListCinema());
    // console.log("Hihi");
    // if (this.props.listCinema) {
    //   for (let i = 0; i < this.props.listCinema.length; i++) {
    //     await this.loadDetailCinema(this.props.listCinema[i].maHeThongRap);
    //   }
    // }
  }

  loadDetailCinema = (id) => {
    this.props.getDetailListCinema(id);
  };

  renderCinemaTabs = () => {
    if (this.props.listCinema) {
      return this.props.listCinema.map((item, index) => {
        if (index == 0) {
          return (
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id={item.maHeThongRap + "-tab"}
                data-toggle="tab"
                data-target={"#" + item.maHeThongRap}
                role="tab"
                aria-controls={item.maHeThongRap}
                aria-selected="true"
              >
                <img src={item.logo} alt={item.maHeThongRap} />
              </a>
            </li>
          );
        } else {
          return (
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id={item.maHeThongRap + "-tab"}
                data-toggle="tab"
                data-target={"#" + item.maHeThongRap}
                role="tab"
                aria-controls={item.maHeThongRap}
                aria-selected="false"
              >
                <img src={item.logo} alt={item.maHeThongRap} />
              </a>
            </li>
          );
        }
      });
    }
  };

  renderCinema = (arr) => {
    if (arr) {
      return arr.map((item, index) => {
        if (index == 0) {
          return (
            <li className="nav-item" role="presentation">
              <a
                className="cinema-item active"
                id={item.maCumRap + "-tab"}
                data-toggle="tab"
                data-target={"#" + item.maCumRap}
                role="tab"
                aria-controls={item.maCumRap}
                aria-selected="true"
              >
                <div>
                  <img
                    className="cinemaImg"
                    src={"./img/" + { item } + "_theater.jpg"}
                    alt={item.maCumRap}
                  />
                  <span className="cinemaInfo">
                    <span className="cinemaName">
                      <span className="colorCinema" className={item}>
                        {item.tenCumRap}
                      </span>
                    </span>
                    <span className="cinemaAddress">{item.diaChi}</span>
                    <span className="redDetail">[chi tiết]</span>
                  </span>
                </div>
              </a>
            </li>
          );
        } else {
          return (
            <li className="nav-item" role="presentation">
              <a
                className="cinema-item"
                id={item.maCumRap + "-tab"}
                data-toggle="tab"
                data-target={"#" + item.maCumRap}
                role="tab"
                aria-controls={item.maCumRap}
                aria-selected="false"
              >
                <div>
                  <img
                    className="cinemaImg"
                    src={"./img/" + { item } + "_theater.jpg"}
                    alt={item.maCumRap}
                  />
                  <span className="cinemaInfo">
                    <span className="cinemaName">
                      <span className="colorCinema" className={item}>
                        {item.tenCumRap}
                      </span>
                    </span>
                    <span className="cinemaAddress">{item.diaChi}</span>
                    <span className="redDetail">[chi tiết]</span>
                  </span>
                </div>
              </a>
            </li>
          );
        }
      });
    }
  };

  renderDetailCinemas = () => {
    if (this.props.listCinema) {
      return this.props.listCinema.map((item, index) => {
        {
          this.props.getDetailListCinema(item.maHeThongRap);
        }
        if (index == 0) {
          return (
            <div
              className="tab-pane fade show active cinemaList"
              id={item.maHeThongRap}
              role="tabpanel"
              aria-labelledby={item.maHeThongRap + "-tab"}
            >
              <ul class="nav nav-tabs listMovies" role="tablist">
                {this.renderCinema(this.props.listDetailCinema)}
              </ul>
            </div>
          );
        } else {
          return (
            <div
              className="tab-pane fade show cinemaList"
              id={item.maHeThongRap}
              role="tabpanel"
              aria-labelledby={item.maHeThongRap + "-tab"}
            >
              <ul class="nav nav-tabs listMovies" role="tablist">
                {this.renderCinema(this.props.listCinema)}
              </ul>
            </div>
          );
        }
      });
    }
  };

  render() {
    return (
      <section id="cinemas" className="movieList">
        <ul className="nav nav-tabs listCinemas" id="cinemaTab" role="tablist">
          {this.renderCinemaTabs()}
        </ul>
        <div class="tab-content" id="cinemaTabContent">
          <div
            class="tab-pane fade show active cinemaList"
            id="BHD"
            role="tabpanel"
            aria-labelledby="BHD-tab"
          >
            <ul class="nav nav-tabs listMovies" role="tablist">
              {/* {this.renderDetailCinemas()} */}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listCinema: state.showTimeReducer.listCinema,
    listDetailCinema: state.showTimeReducer.listDetailCinema,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListCinema: () => {
      dispatch(actGetSystemCinemaApi());
    },
    getDetailListCinema: (id) => {
      dispatch(actGetDetailListCinemaApi(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowTimeComponent);

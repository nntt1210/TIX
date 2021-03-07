import React, { Component } from 'react';
import { connect } from 'react-redux';
import CineList from '../../../components/CinemasList/CineList';
import CinemasSideBar from '../../../components/CinemasSideBar/CinemasSideBar';
import { actCallDetailCinemas } from "./modules/action";
import reducerCumRap from "./modules/reducerCumRapPage";

class CumRapPage extends Component {

    renderContentCinemas = (detailCinemas) => {
        console.log('detailCinemas', detailCinemas);
        if (detailCinemas && detailCinemas.length > 0) {
            return detailCinemas.map((item) => {
                return (
                    <div className="tab-content" id="cinemaTabContent">
                        <div className="tab-pane fade show active cinemaList" id={`#${item.maHeThongRap}`} role="tabpanel" aria-labelledby="BHD-tab">
                            <ul className="nav nav-tabs listMovies" role="tablist">
                                <CineList listCine={item.lstCumRap} />
                            </ul>
                            <div className="tab-content selectScroll ">
                                <div className="tab-pane fade show active" id="bhd-star-cineplex-bitexco" role="tabpanel" aria-labelledby="bitexco-tab">
                                    <div className="movieInfo" data-toggle="collapse" href="#cinema-28-film-2123" aria-expanded="true">
                                        <img className="movieImg" src="./img/tenet-15768107031731_60x60.jpg" alt />
                                        <div className="wrapInfo">
                                            <p>
                                                <span className="ageType">C16</span>
                                                <span className="movieTitle">Tenet -</span>
                                            </p>
                                            <p>120 phút - TIX 7.3 - IMDb 0</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="tab-pane fade show active" id="bhd-star-cineplex-3-2" role="tabpanel" aria-labelledby="bitexco-tab">
                                    <div className="movieInfo" data-toggle="collapse" href="#cinema-28-film-2123" aria-expanded="true">
                                        <img className="movieImg" src="./img/tenet-15768107031731_60x60.jpg" alt />
                                        <div className="wrapInfo">
                                            <p>
                                                <span className="ageType">C16</span>
                                                <span className="movieTitle">Tenet -</span>
                                            </p>
                                            <p>120 phút - TIX 7.3 - IMDb 0</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="movieSession collapse in collapse show" id="cinema-28-film-2123" aria-expanded="true">
                                    <div className="listTime">
                                        <div className="version">
                                            2D Digital
</div>
                                        <div className="sessions">
                                            <a className="session">
                                                <span className="start-time">
                                                    14:20
  </span>
  ~ 16:20
</a>
                                            <a className="session">
                                                <span className="start-time">
                                                    16:15
  </span>
  ~ 18:15
</a>
                                            <a className="session">
                                                <span className="start-time">
                                                    19:05
  </span>
  ~ 21:05
</a>
                                            <a className="session">
                                                <span className="start-time">
                                                    14:20
  </span>
  ~ 16:20
</a>
                                            <a className="session">
                                                <span className="start-time">
                                                    16:15
  </span>
  ~ 18:15
</a>
                                            <a className="session">
                                                <span className="start-time">
                                                    19:05
  </span>
  ~ 21:05
</a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    render() {
        const { cinemasList, detailCinemas } = this.props;
        console.log("cinemasList", cinemasList);
        return (
            <section id="cinemas" className="movieList">
                <ul className="nav nav-tabs listCinemas" id="cinemaTab" role="tablist">
                    <CinemasSideBar cinemasList={cinemasList} />
                </ul>
                {this.renderContentCinemas(detailCinemas)}
            </section>

        );
    }
}
function mapStateToProps(state) {
    return {
        cinemasList: state.reducerCumRap.cinemasList,
        detailCinemas: state.reducerCumRap.detailCinemas,

    };
}
const mapDispatchToProps = (dispatch) => {
    return ({
        handleCallCinemas: (data) => { dispatch(actCallDetailCinemas(data)) }
    })
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(CumRapPage);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchFilmDetail } from "./modules/action";
import { Link } from 'react-router-dom';

//MOVIE IN LICH CHIEU SAP CHIEU

class MovieLichChieu extends Component {


    render() {
        const { movieLichChieu, movie, currentPosition } = this.props;

        return movieLichChieu.map((item) => {
            // { this.props.handleDispatch(item.maPhim) }
            console.log("movieLichChieu", item);

            return (
                <>
                    <div className="col-3 film">
                        <Link to={`/phim/${item.maPhim}`}>
                            <div className="showDetail">
                                <img src={item.hinhAnh} alt />
                                <div className="hoverInfo showHover">
                                </div>
                            </div>
                            <span className="avgPoint">
                                <p className="txtPoint">8.8</p>
                                <p>
                                    <img className="smallStar" src="./img/star1.png" alt />
                                    <img className="smallStar" src="./img/star1.png" alt />
                                    <img className="smallStar" src="./img/star1.png" alt />
                                    <img className="smallStar" src="./img/star1.png" alt />
                                    <img className="half" src="./img/star1.2.png" alt />
                                </p>
                            </span>
                        </Link>
                        <div className="info">
                            <Link to={`/phim/${item.maPhim}`}>
                                <div className="nameFilm hideHover">
                                    <span className="ageType">
                                        C18
                                    </span>
                                    <span>{item.tenPhim}</span>
                                </div>
                                <div className="infoFilm hideHover">
                                    100 phút
                                </div>
                            </Link>
                            <div className="showHover"><Link className="buyNow" to={`/phim/${item.maPhim}`}>MUA VÉ</Link>
                            </div>
                        </div>
                        <button className="btn playTrailer" data-toggle="modal" data-target="#Modal"
                            onclick="displayModal(this)" to={`/phim/${item.maPhim}`}>
                            <span className="d-none">{item.trailer}</span>
                            <img src="./img/play-video.png" alt />
                        </button>
                    </div>

                </>
            );
        })

    }
}
function mapStateToProps(state) {
    return {
        movie: state.reducerMovieDetail.data
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleDispatch: (movieId) => {
            dispatch(actFetchFilmDetail(movieId))
        }
    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(MovieLichChieu);
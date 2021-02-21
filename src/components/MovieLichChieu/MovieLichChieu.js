import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchFilmDetail } from "./modules/action";

class MovieLichChieu extends Component {

    displayModal = ()=>{}
    render() {
        const { movieLichChieu, movie } = this.props;
        // console.log("mapStateToProps", movie.thoiLuong);
        return movieLichChieu.map((item) => {
            // { this.props.handleDispatch(item.maPhim) }
            return (
                <>
                    <div className=" col-3 film">
                        <a href="https://tix.vn/phim/2447-lich-chieu-ac-quy-doi-dau">
                            <div className="showDetail">
                                <img src={item.hinhAnh} alt />
                                <div className="hoverInfo showHover">
                                </div>
                            </div>
                            <span className="avgPoint">
                                <p className="txtPoint">8.8</p>
                                <p>
                                    <img className="smallStar" src="./img/star1.png" alt /><img className="smallStar" src="./img/star1.png" alt /><img className="smallStar" src="./img/star1.png" alt /><img className="smallStar" src="./img/star1.png" alt /><img className="half" src="./img/star1.2.png" alt />
                                </p>
                            </span>
                        </a><div className="info"><a href="https://tix.vn/phim/2447-lich-chieu-ac-quy-doi-dau">
                            <div className="nameFilm hideHover">
                                <span className="ageType">
                                    C18
                                                </span>
                                <span>{item.tenPhim}</span>
                            </div>
                            <div className="infoFilm hideHover">
                                100 phút
                                            </div>
                        </a><div className="showHover"><a href="https://tix.vn/phim/2447-lich-chieu-ac-quy-doi-dau">
                        </a><a href="https://tix.vn/phim/2447-lich-chieu-ac-quy-doi-dau" className="buyNow">MUA VÉ</a>
                            </div>
                        </div>
                        <button className="playTrailer" data-toggle="modal" data-target="#Modal" onclick="displayModal(this)">
                            <span className="d-none">https://www.youtube.com/embed/jU06ylSH-BY</span>
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
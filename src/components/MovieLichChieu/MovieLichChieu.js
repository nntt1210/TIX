import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieLichChieu extends Component {

    render() {
        const { movieLichChieu } = this.props;
        console.log("movieLichChieu", movieLichChieu);
        return movieLichChieu.map((item) => {
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
                                <span>Ác Quỷ Đối Đầu - Deliver Us From Evil - (C18)</span>
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

    };
}

export default connect(
    mapStateToProps,
)(MovieLichChieu);
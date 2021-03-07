import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieDetailLayout extends Component {
    render() {
        const { detailMovieLayout } = this.props;
        console.log("MovieDetailLayout", detailMovieLayout);

        return (
            <div className="mainMaxWidth2" id="movieDetailLayout">
                <div className="col-sm-3 col-xs-4 filmPosterTop px-0">
                    <a>
                        <img src={detailMovieLayout.hinhAnh} />

                    </a>
                    <button className="showHover" >
                        <span className="d-none">{detailMovieLayout.trailer}</span>
                        <img src="./img/play-video.png" alt />
                    </button>

                </div>
                <div className="col-sm-5 infoMiddle mx-3">
                    <div>
                        <span className="date">
                            {new Date(detailMovieLayout.ngayKhoiChieu).toLocaleDateString()}
                        </span>
                        <br />
                    </div>
                    <div>
                        <span className="ageType">C16<span className="date">{detailMovieLayout.tenPhim}</span></span>
                        <br />
                    </div>
                    <div>
                        <span className="thoiLuong">
                            {/* {detailMovieLayout.lichChieu.thoiLuong}  */}
                            - 0 IMDb - 2D/Digital</span>
                        <br />
                    </div>
                    <button className="btnBuyTicketDetail ng-scope" >Mua vé</button>
                </div>
                <div className="col-sm-2 circleStar">
                    <div className="circleBorder"></div>
                    <div id="circlePercent " className="c100 p75">
                        <div className="circleBorder">
                        </div>
                        <span className="">{detailMovieLayout.danhGia}</span>
                        <div className="slice">
                            <div className="bar" />
                            <div className="fill" />
                        </div>
                    </div>
                    <div id="starMain" className="row star " style={{ marginTop: 10 }} ng-bind-html="setStar(filmDetail.avg_point)">
                        <img className="smallStar" src=" /img/icons/star1.png" />
                        <img className="smallStar" src="app/assets/img/icons/star1.png" />
                        <img className="smallStar" src="app/assets/img/icons/star1.png" />
                        <img className="half" src="app/assets/img/icons/star1.2.png" />
                    </div>
                    <div className="row" style={{ marginTop: 10 }}>
                        <span className="detailMainInfo1 " style={{ margin: 'auto' }}>95 người đánh giá</span>
                    </div>
                </div>

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        // detailMovieLayout: state.reducerSecondPage.data,
    };
}
export default connect(
    mapStateToProps,
)(MovieDetailLayout);
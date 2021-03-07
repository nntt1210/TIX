import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class MobileApp extends Component {
    render() {
        return (
            <section className="mobileApp" id="app">
                <div className="col-12 coverImage" id="homeApp"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/backapp.jpg'})` }}>
                    <div className="mainMaxWidth">
                        <div className="row ">
                            <div className="col-md-6 col-sm-12 text-md-left text-sm-center text-center leftText">
                                <p>Ứng dụng tiện lợi dành cho người yêu điện ảnh</p>
                                <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                                <button className="button-left">App miễn phí - Tải về ngay!</button>
                                <p>TIX có hai phiên bản
    <a className="tagA" target="_blank" href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8">iOS</a> &amp;
    <a className="tagA" target="_blank" href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">Android</a>
                                </p>
                            </div>
                            <div className="col-md-6 col-sm-12 ">
                                <div className="rightCarousel py-5 ">
                                    <div><img className="img-responsive phone-img" src="./img/mobile.png" alt="Loading..." /></div>
                                    <div className="showAppDetail" id="appDetail">
                                        <div id="demo" className="carousel slide" data-ride="carousel">
                                            {/* The slideshow */}
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img className="d-block w-100" src="./img/slide16.jpg" alt="Los Angeles" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block w-100" src="./img/slide2.jpg" alt="Chicago" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block w-100" src="./img/slide3.jpg" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block w-100" src="./img/slide5.jpg" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block w-100" src="./img/slide6.jpg" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block w-100" src="./img/slide7.jpg" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block w-100" src="./img/slide9.jpg" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block w-100" src="./img/slide8.jpg" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block w-100" src="./img/slide10.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default connect(
    mapStateToProps,
)(MobileApp);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


class FooterHome extends Component {
    render() {
        return (
            <>
                <footer className="footer" id="idFooter">
                    <div className=" col-sm-12">
                        <div className="mainMaxWidth">
                            <div className="row my-3 ">
                                <div className="col-sm-4 col-12 colFirst">
                                    <p>TIX</p>
                                    <div className="row">
                                        <div className="col-6 items">
                                            <NavLink to="/faq"><p>FAQ</p></NavLink>
                                            <NavLink to="/faq"><p>Brand Guidelines</p></NavLink>
                                        </div>
                                        <div className="col-6 items">
                                            <NavLink to="/faq"><p>Thỏa thuận sử dụng</p></NavLink>
                                            <NavLink to="/faq"><p>Chính sách bảo mật</p></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 colSecond">
                                    <p>ĐỐI TÁC</p>
                                    <div className="row col-sm-12 smallIcon hideAll">
                                        <a href="#"><img src="./img/cgv.jpg" alt /></a>
                                        <a href="#"><img src="./img/bhd.png" alt /></a>
                                        <a href="#"><img src="./img/galaxycine.png" alt /></a>
                                        <a href="#"><img src="./img/cinestar.png" alt /></a>
                                        <a href="#"><img src="./img/404b8c4b80d77732e7426cdb7e24be20.png" alt /></a>
                                    </div>
                                    <div className="row col-sm-12 smallIcon hideAll">
                                        <a href="#"><img src="./img/megags.png" alt /></a>
                                        <a href="#"><img src="./img/bt.jpg" alt /></a>
                                        <a href="#"><img src="./img/dongdacinema.png" alt /></a>
                                        <a href="#"><img src="./img/TOUCH.png" alt /></a>
                                        <a href="#"><img src="./img/cnx.jpg" alt /></a>
                                    </div>
                                    <div className="row col-sm-12 smallIcon hideAll">
                                        <a href="#"><img src="./img/STARLIGHT.png" alt /></a>
                                        <a href="#"><img src="./img/dcine.png" alt /></a>
                                        <a href="#"><img src="./img/zalopay_icon.png" alt /></a>
                                        <a href="#"><img src="./img/payoo.jpg" alt /></a>
                                        <a href="#"><img src="./img/VCB.png" alt /></a>
                                    </div>
                                    <div className="row col-sm-12 smallIcon hideAll">
                                        <a href="#"><img src="./img/AGRIBANK.png" alt /></a>
                                        <a href="#"><img src="./img/VIETTINBANK.png" alt /></a>
                                        <a href="#"><img src="./img/IVB.png" alt /></a>
                                        <a href="#"><img src="./img/123go.png" alt /></a>
                                        <a href="#"><img src="./img/laban.png" alt /></a>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-12 colThird">
                                    <div className="row">
                                        <div className="col-sm-6 col-12 py-md-0 py-sm-3 py-3">
                                            <p>MOBILE APP</p>
                                            <a href="https://apps.apple.com/vn/app/tix-đặt-vé-nhanh-nhất/id615186197"><img src="./img/apple-logo.png" alt /></a>
                                            <a href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"><img src="./img/android-logo.png" alt /></a>
                                        </div>
                                        <div className="col-sm-6 col-12 py-md-0 py-sm-3 py-3">
                                            <p>SOCIAL</p>
                                            <a href="https://www.facebook.com/tix.vn/"><img src="./img/facebook-logo.png" alt /></a>
                                            <a href="https://zalo.me/tixdatve"><img src="./img/zalo-logo.png" alt /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div><hr className="hrFooter" /></div>
                            <div className="row py-3 text-md-left text-sm-center text-center">
                                <div className="col-sm-1 col-12 px-0 py-md-0 py-sm-3 py-3 imgFooter">
                                    <img className="vngIcon" src="./img/zion-logo.jpg" style={{ borderRadius: 8 }} />
                                </div>
                                <div className="col-sm-9 col-12 px-sm-3 p-xs-3 infoFooter">
                                    <p>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                                    <span>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</span>
                                    <span>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,<br />đăng ký thay đổi lần&nbsp;thứ&nbsp;30, ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020  do Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố Hồ Chí Minh cấp.</span>
                                    <span>Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436<br />Email: <a href="mailto:support@tix.vn" style={{ color: '#FB4226' }}>support@tix.vn</a></span>
                                </div>
                                <div className="col-sm-2 col-12 imgFooter">
                                    <a target="_blank" href="http://online.gov.vn/Home/WebDetails/62782"><img className="imgBoCo" alt="Bộ Công Thương" title src="./img/d1e6bd560daa9e20131ea8a0f62e87f8.png" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </>
        );
    }
}

export default FooterHome;
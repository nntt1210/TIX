
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from "react-router-dom";
import Modal from "../../containers/HomeTemplate/LoginPage/ModalLogin/Modal";


class NavBarHome extends Component {
    constructor() {
        super();
        this.state = {
            user: ''
        }
    }
    componentDidMount() {
        if (localStorage.getItem('UserAuthenticated')) {
            console.log("NavBarHome", JSON.parse(localStorage.getItem("UserAuthenticated")).hoTen);
            this.setState({ user: JSON.parse(localStorage.getItem("UserAuthenticated")).hoTen || JSON.parse(localStorage.getItem("UserAuthenticated")).Es.sd });
        } else {
            this.setState({ user: "Đăng Nhập" });
        }
    }
    render() {

        return (
            <header>
                <div className="header__content">
                    <div className="header__left">
                        <img src="./img/web-logo.png" alt />
                    </div>
                    <div className="header__center d-flex align-items-center">
                        <ul>
                            <li><a href="#now">Lịch Chiếu</a></li>
                            <li><a href="#cinemas">Cụm rạp</a></li>
                            <li><a href="#homeNews">Tin Tức</a></li>
                            <li><a href="#app">Ứng dụng</a></li>
                        </ul>
                    </div>

                    <div class="header__right d-flex align-items-center">
                        <div className="header__account border-right">
                            <NavLink
                                to="/login"
                                data-toggle="modal"
                                data-target="#modalLogin">
                                <img src="./img/avatar.png" alt />
                                <span className="text-dark">
                                    {this.state.user}
                                </span>
                            </NavLink>
                        </div>
                        <div className="header__location dropdown d-flex">
                            <img src="./img/location-header.png" alt />
                            <div className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                Hồ Chí Minh
                        </div>
                            <ul className="dropdown-menu selectScroll">
                                <li>
                                    <a href="#">Hồ Chí Minh</a>
                                </li>
                                <li>
                                    <a href="#">Hà Nội</a>
                                </li>
                                <li>
                                    <a href="#">Đà Nẵng</a>
                                </li>
                                <li>
                                    <a href="#">Hải Phòng</a>
                                </li>
                                <li>
                                    <a href="#">Biên Hoà</a>
                                </li>
                                <li>
                                    <a href="#">Nha Trang</a>
                                </li>
                                <li>
                                    <a href="#">Bình Dương</a>
                                </li>
                                <li>
                                    <a href="#">Phan Thiết</a>
                                </li>
                                <li>
                                    <a href="#">Hạ Long</a>
                                </li>
                                <li>
                                    <a href="#">Cần Thơ</a>
                                </li>
                                <li>
                                    <a href="#">Vũng Tàu</a>
                                </li>
                                <li>
                                    <a href="#">Quy Nhơn</a>
                                </li>
                                <li>
                                    <a href="#">Huế</a>
                                </li>
                                <li>
                                    <a href="#">Long Xuyên</a>
                                </li>
                                <li>
                                    <a href="#">Thái Nguyên</a>
                                </li>
                                <li>
                                    <a href="#">Buôn Ma Thuột</a>
                                </li>
                                <li>
                                    <a href="#">Bắc Giang</a>
                                </li>
                                <li>
                                    <a href="#">Bến Tre</a>
                                </li>
                                <li>
                                    <a href="#">Việt Trì</a>
                                </li>
                                <li>
                                    <a href="#">Ninh Bình</a>
                                </li>
                                <li>
                                    <a href="#">Thái Bình</a>
                                </li>
                                <li>
                                    <a href="#">Vinh</a>
                                </li>
                                <li>
                                    <a href="#">Bảo Lộc</a>
                                </li>
                                <li>
                                    <a href="#">Đà Lạt</a>
                                </li>
                                <li>
                                    <a href="#">Trà Vinh</a>
                                </li>
                                <li>
                                    <a href="#">Yên Bái</a>
                                </li>
                                <li>
                                    <a href="#">Kiên Giang</a>
                                </li>
                                <li>
                                    <a href="#">Vĩnh Long</a>
                                </li>
                                <li>
                                    <a href="#">Cà Mau</a>
                                </li>
                                <li>
                                    <a href="#">Hậu Giang</a>
                                </li>
                                <li>
                                    <a href="#">Tây Ninh</a>
                                </li>
                                <li>
                                    <a href="#">Tuyên Quang</a>
                                </li>
                                <li>
                                    <a href="#">Thanh Hoá</a>
                                </li>
                                <li>
                                    <a href="#">Nam Định</a>
                                </li>
                                <li>
                                    <a href="#">Hải Dương</a>
                                </li>
                                <li>
                                    <a href="#">Gia Lai</a>
                                </li>
                                <li>
                                    <a href="#">Hà Tĩnh</a>
                                </li>
                                <li>
                                    <a href="#">Phú Yên</a>
                                </li>
                                <li>
                                    <a href="#">Bạc Liêu</a>
                                </li>
                                <li>
                                    <a href="#">Long An</a>
                                </li>
                                <li>
                                    <a href="#">Đồng Hới</a>
                                </li>
                                <li>
                                    <a href="#">Hà Nam</a>
                                </li>
                                <li>
                                    <a href="#">Bắc Ninh</a>
                                </li>
                                <li>
                                    <a href="#">Quảng Trị</a>
                                </li>
                                <li>
                                    <a href="#">Kon Tum</a>
                                </li>
                                <li>
                                    <a href="#">Sóc Trăng</a>
                                </li>
                                <li>
                                    <a href="#">Sơn La</a>
                                </li>
                                <li>
                                    <a href="#">Lạng Sơn</a>
                                </li>
                                <li>
                                    <a href="#">Quảng Ngãi</a>
                                </li>
                                <li>
                                    <a href="#">Mỹ Tho</a>
                                </li>
                                <li>
                                    <a href="#">Đồng Tháp</a>
                                </li>
                                <li>
                                    <a href="#">Hưng Yên</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        </button>
                        <div className="collapse navbar-collapse bg-light" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link close_nav" to="#" >
                                        <div className="btn btn-danger"
                                            data-toggle="modal"
                                            data-target="#modelId">
                                            <img src="./img/avatar.png" alt />
                                            <span>
                                                Đăng Nhập
                                    </span>
                                        </div>

                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link close_nav" href="#now">
                                        Lịch chiếu
        </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link close_nav" href="#cinemas">
                                        Cụm rạp
        </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link close_nav" href="#homeNews">
                                        Tin tức
        </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link close_nav" href="#app">
                                        Ứng dụng
        </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" data-toggle="modal" data-target="#locationModal">
                                        Hồ Chí Minh
        </a>
                                    <div className="modal fade" id="locationModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                {/* <div class="modal-header"> */}
                                                <button type="button" className="close close_modal" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                                {/* </div> */}
                                                <div className="modal-body">
                                                    <ul className="selectScroll">
                                                        <li className="modal-item">
                                                            <a className="active" href="#">Hồ Chí Minh</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Hà Nội</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Đà Nẵng</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Hải Phòng</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Biên Hoà</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Nha Trang</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Bình Dương</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Phan Thiết</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Hạ Long</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Cần Thơ</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Vũng Tàu</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Quy Nhơn</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Huế</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Long Xuyên</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Thái Nguyên</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Buôn Ma Thuột</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Bắc Giang</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Bến Tre</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Việt Trì</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Ninh Bình</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Thái Bình</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Vinh</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Bảo Lộc</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Đà Lạt</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Trà Vinh</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Yên Bái</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Kiên Giang</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Vĩnh Long</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Cà Mau</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Hậu Giang</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Tây Ninh</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Tuyên Quang</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Thanh Hoá</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Nam Định</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Hải Dương</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Gia Lai</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Hà Tĩnh</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Phú Yên</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Bạc Liêu</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Long An</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Đồng Hới</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Hà Nam</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Bắc Ninh</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Quảng Trị</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Kon Tum</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Sóc Trăng</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Sơn La</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Lạng Sơn</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Quảng Ngãi</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Mỹ Tho</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Đồng Tháp</a>
                                                        </li>
                                                        <li className="modal-item">
                                                            <a href="#">Hưng Yên</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="modal-footer">
                                                    {/* <button type="button" class="btn btn-secondary close_modal" data-dismiss="modal">Đóng</button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </>

                </div>
            </header>

        );
    }
}
function mapStateToProps(state) {
    return {

    };
}
export default connect(
    mapStateToProps,
)(NavBarHome);


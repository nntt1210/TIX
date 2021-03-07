import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class FAQPage extends Component {
    render() {
        return (
            <section className="faqContent container">
                <div className="row">
                    <div className="col-3">
                        <ul className="side-menu side-hide" style={{ position: 'absolute', top: 10, listStyle: 'none' }}>
                            <h4>TIX</h4>
                            <li>
                                <div className="p-3">
                                    <NavLink ui-sref="main.term"
                                        title="Thỏa thuận sử dụng"
                                        // className="nav-link"
                                        role="tab"
                                        to="/thoa-thuan-su-dung">Thỏa thuận sử dụng</NavLink>
                                </div>
                            </li>
                            <li >
                                <div className="p-3">
                                    <NavLink ui-sref="main.policy" title="Chính sách bảo mật" to="/chinh-sach-bao-mat">Chính sách bảo mật</NavLink>
                                </div>
                            </li>
                            <li>
                                <div className="p-3">
                                    <NavLink ui-sref="main.faq" title="FAQ" to="/faq">FAQ</NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="main col-7" id="main">
                        <div className="contain">
                            <div className="sideLeft">
                                <div className="group">
                                    <h1>FAQ - TIX</h1>
                                    <div className="item" id="mucdichthuthap">
                                        <h2>1. TIX là gì?</h2>
                                        <div className="m-section">
                                            <p>Là ứng dụng trên điện thoại thông minh và website đặt vé xem phim trực tuyến tại các rạp như BHD, Galaxy, CineStar. TIX giúp bạn mua vé trước để không phải đến rạp sớm xếp hàng mua vé, hoặc lo lắng về việc hết vé. Bên cạnh đó, TIX còn cập nhật thường xuyên các thông tin phim như trailer, tin tức, thông tin rạp, suất chiếu, các đánh giá phim, chương trình khuyến mãi từ rạp và của riêng TIX dành cho người sử dụng.

                                            Truy cập website TIX tại tix.vn

Ứng dụng TIX hiện có trên các hệ điều hành: iOS, Android. Bạn có thể tải nhanh về điện thoại bằng cách truy cập tix.vn/app/download</p>

                                        </div>
                                    </div>
                                    <div className="item" id="phamvithuthap">
                                        <h2>2. Tại sao tôi không xem phim được tại TIX?</h2>
                                        <div className="m-section">
                                            <p>TIX gồm có ứng dụng trên điện thoại và website, là nơi giới thiệu thông tin và hỗ trợ đặt vé cho các phim chiếu tại rạp, không phải là nơi xem phim trực tuyến không bản quyền.</p>

                                        </div>
                                    </div>
                                    <div className="item" id="nguyentac">
                                        <h2>3. Tôi có thể đặt giữ vé trước qua điện thoại và thanh toán sau khi nhận vé không?</h2>
                                        <div className="m-section">
                                            <p>TIX chỉ hỗ trợ đặt vé trực tuyến, không hỗ trợ giữ vé qua điện thoại. Bạn vui lòng chọn ghế và thanh toán trước cho vé.</p>

                                        </div>
                                    </div>
                                    <div className="item" id="phamvi">
                                        <h2>4. Tôi có thể mua vé dành cho trẻ em, học sinh/sinh viên với giá ưu đãi như mua trực tiếp tại rạp không?</h2>
                                        <div className="m-section">
                                            <p>Ứng dụng TIX sử dụng thông tin thành viên cung cấp để:</p>

                                        </div>
                                    </div>
                                    <div className="item" id="moreInformation">
                                        <h2>5. Làm sao để tôi có thể đặt vé và thanh toán trực tuyến?</h2>
                                        <div className="m-section">
                                            <p>Để đặt vé trực tuyến, bạn vui lòng thực hiện các bước sau:</p>
                                            <div className="n-section px-3">
                                                <ul>
                                                    <li>Vào phần Lịch chiếu, bạn có thể chọn theo tựa phim, hoặc theo rạp chiếu.</li>
                                                    <li>Tiến hành chọn suất chiếu, ghế.</li>
                                                    <li>TĐiền thông tin của người nhận vé, sau đó bạn chọn hình thức thanh toán phù hợp và tiến hành thanh toán trực tuyến cho vé.</li>
                                                    <li>Gửi các thông báo về các hoạt động trao đổi thông tin giữa các Thành viên và Ứng dụng TIX;</li>
                                                    <li>Ngăn ngừa các hoạt động phá hủy tài khoản người dùng của Thành viên hoặc các hoạt động giả mạo Thành viên;</li>
                                                    <li>Tiến hành các hoạt động tra cứu và phân tích người dùng nhằm nâng cao chất lượng dịch vụ, quản lý và bảo vệ các thông tin, hệ thống kỹ thuật dịch vụ, đo lường hiệu suất dịch vụ do TIX cung ứng và cải thiện sản phẩm, dịch vụ của TIX.</li>
                                                    <li>Liên lạc và giải quyết với thành viên trong những trường hợp đặc biệt;</li>
                                                    <li>Không sử dụng thông tin cá nhân của thành viên ngoài mục đích xác nhận và liên hệ có liên quan đến giao dịch tại Ứng dụng TIX;</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="m-section">
                                            <p>Các hình thức thanh toán trực tuyến TIX đang áp dụng:</p>
                                            <div className="n-section px-3">
                                                <ul>
                                                    <li>Thanh toán qua ZaloPay</li>
                                                    <li>TThanh toán qua ATM nội địa</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="sideRight col-2">
                        <ul>
                            <li>
                                <div className="p-0">
                                    <a ui-sref="main.term"
                                        title="Thỏa thuận sử dụng"
                                        // className="nav-link"
                                        role="tab"
                                        href="#mucdichthuthap">1. TIX là gì?</a>
                                </div>
                            </li>
                            <li >
                                <div className="p-0">
                                    <a ui-sref="main.policy" title="Chính sách bảo mật"
                                        href="#phamvithuthap">2. Tại sao tôi không xem phim được tại TIX?</a>
                                </div>
                            </li>
                            <li>
                                <div className="p-0">
                                    <a ui-sref="main.faq" title="FAQ"
                                        href="#nguyentac">3. Tôi có thể đặt giữ vé trước qua điện thoại và thanh toán sau khi nhận vé không?</a>
                                </div>
                            </li>
                            <li>
                                <div className="p-0">
                                    <a ui-sref="main.faq" title="FAQ"
                                        href="#phamvi">4. Tôi có thể mua vé dành cho trẻ em, học sinh/sinh viên với giá ưu đãi như mua trực tiếp tại rạp không?</a>
                                </div>
                            </li>
                            <li>
                                <div className="p-0">
                                    <a ui-sref="main.faq" title="FAQ"
                                        href="moreInformation">5. Làm sao để tôi có thể đặt vé và thanh toán trực tuyến?</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

            </section>
        );
    }
}

export default FAQPage;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";



class ThoaThuanPage extends Component {
    render() {
        return (
            <div className="thoaThuanContent container" >
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
                                    <h1>THỎA THUẬN SỬ DỤNG</h1>
                                    <h6>Chào mừng bạn đã đến với website của TIX. TIX cung cấp các sản phẩm và dịch vụ dựa trên những điều kiện dưới đây.</h6>
                                    <p>Khi bạn sử dụng sản phẩm và dịch vụ do TIX cung cấp, bạn đồng ý với những điều khoản sử dụng sau. Vui lòng đọc kỹ các điều khoản dưới đây.</p>
                                    <div className="item" id="mucdichthuthap">
                                        <h2>I. CHÍNH SÁCH VÀ QUY ĐỊNH CHUNG</h2>
                                        <div className="m-section">
                                            <h2>1. Quyền Truy Cập</h2>
                                            <p>Với điều kiện bạn tuân theo các Thỏa thuận sử dụng và các khoản thanh toán cho các dịch vụ bổ sung, bạn có quyền truy cập và sử dụng các dịch vụ của TIX. Quyền truy cập này không bao gồm bất kỳ giao dịch mua đi bán lại hoặc sử dụng vì mục đích thương mại các dịch vụ và nội dung của TIX; các thông tin mô tả, đánh giá, bình luận; bất kỳ sự sao chép hoặc download thông tin để phục vụ lợi ích của bên thứ ba; hoặc việc sử dụng các công cụ khai thác dữ liệu. TIX có quyền khiếu nại tất cả các hành động sao chép, sử dụng với mục đích thương mại mà không được sự đồng ý từ TIX. Bạn có thể bị tước quyền truy cập vào TIX nếu bạn không tuân theo các Thỏa thuận sử dụng này.</p>

                                        </div>
                                        <div className="m-section">
                                            <h2>2. Tạo Tài Khoản Và Chế Độ Bảo Mật</h2>
                                            <p>Khi đăng ký tham gia TIX, bạn vui lòng:</p>
                                            <div className="n-section px-3">
                                                <ul>
                                                    <li> Cung cấp những thông tin chính xác, đầy đủ theo bản đăng ký mẫu của TIX.</li>
                                                    <li> Duy trì và cập nhật những thông tin, thay đổi mới nhất một cách chính xác và đầy đủ.</li>

                                                </ul>
                                            </div>
                                            <p>Sự không chính xác của những thông tin bạn cung cấp có thể làm bạn không tận dụng được hết những sản phẩm và dịch vụ TIX cung cấp. Trong một số trường hợp đặc biệt, TIX có quyền từ chối cung cấp dịch vụ cho bạn và đình chỉ tài khoản của bạn vào thời điểm hiện tại và trong tương lai nếu những thông tin mà bạn cung cấp không chính xác hoặc TIX có lý do nghi ngờ tính trung thực của những thông tin mà bạn cung cấp.</p>
                                            <p>Chúng tôi sẽ không sử dụng những thông tin cá nhân của bạn nếu chưa được sự cho phép của bạn. Bạn có thể yên tâm rằng khi bạn cung cấp thông tin cho TIX, thông tin của bạn luôn được bảo mật tuyệt đối. Thông tin của bạn chỉ được sử dụng với mục đích gửi thông báo cho bạn về phim ảnh, các chương trình khuyến mãi… TIX cam kết sẽ không tiết lộ thông tin của bạn cho một bên thứ ba mà không có sự đồng ý, ngoại trừ yêu cầu cung cấp bởi pháp luật.</p>
                                            <p>Quyền truy cập và sử dụng tài khoản chỉ dành riêng cho cá nhân có thẩm quyền. Mọi hành vi cố ý truy cập trái phép đều có thể bị truy tố.</p>
                                        </div>
                                        <div className="m-section">
                                            <h2>3. Tài Khoản Của Bạn</h2>
                                            <p>Với điều kiện bạn tuân theo các Thỏa thuận sử dụng và các khoản thanh toán cho các dịch vụ bổ sung, bạn có quyền truy cập và sử dụng các dịch vụ của TIX. Quyền truy cập này không bao gồm bất kỳ giao dịch mua đi bán lại hoặc sử dụng vì mục đích thương mại các dịch vụ và nội dung của TIX; các thông tin mô tả, đánh giá, bình luận; bất kỳ sự sao chép hoặc download thông tin để phục vụ lợi ích của bên thứ ba; hoặc việc sử dụng các công cụ khai thác dữ liệu. TIX có quyền khiếu nại tất cả các hành động sao chép, sử dụng với mục đích thương mại mà không được sự đồng ý từ TIX. Bạn có thể bị tước quyền truy cập vào TIX nếu bạn không tuân theo các Thỏa thuận sử dụng này.</p>

                                        </div>
                                        <div className="m-section">
                                            <h2>4. Bình Luận, Đánh Giá, Và Những Nội Dung Khác</h2>
                                            <p>Với điều kiện bạn tuân theo các Thỏa thuận sử dụng và các khoản thanh toán cho các dịch vụ bổ sung, bạn có quyền truy cập và sử dụng các dịch vụ của TIX. Quyền truy cập này không bao gồm bất kỳ giao dịch mua đi bán lại hoặc sử dụng vì mục đích thương mại các dịch vụ và nội dung của TIX; các thông tin mô tả, đánh giá, bình luận; bất kỳ sự sao chép hoặc download thông tin để phục vụ lợi ích của bên thứ ba; hoặc việc sử dụng các công cụ khai thác dữ liệu. TIX có quyền khiếu nại tất cả các hành động sao chép, sử dụng với mục đích thương mại mà không được sự đồng ý từ TIX. Bạn có thể bị tước quyền truy cập vào TIX nếu bạn không tuân theo các Thỏa thuận sử dụng này.</p>

                                        </div>
                                        <div className="m-section">
                                            <h2>4. Bình Luận, Đánh Giá, Và Những Nội Dung Khác</h2>
                                            <p>Với điều kiện bạn tuân theo các Thỏa thuận sử dụng và các khoản thanh toán cho các dịch vụ bổ sung, bạn có quyền truy cập và sử dụng các dịch vụ của TIX. Quyền truy cập này không bao gồm bất kỳ giao dịch mua đi bán lại hoặc sử dụng vì mục đích thương mại các dịch vụ và nội dung của TIX; các thông tin mô tả, đánh giá, bình luận; bất kỳ sự sao chép hoặc download thông tin để phục vụ lợi ích của bên thứ ba; hoặc việc sử dụng các công cụ khai thác dữ liệu. TIX có quyền khiếu nại tất cả các hành động sao chép, sử dụng với mục đích thương mại mà không được sự đồng ý từ TIX. Bạn có thể bị tước quyền truy cập vào TIX nếu bạn không tuân theo các Thỏa thuận sử dụng này.</p>

                                        </div>

                                    </div>
                                    <div className="item" id="phamvithuthap">
                                        <h2>II. ĐẶT VÉ VÀ THANH TOÁN TRÊN TIX</h2>
                                        <div className="m-section">
                                            <div className="n-section px-3">
                                                <ul>
                                                    <li><strong>Duy Trì Tài Khoản</strong>: để tạo và duy trì tài khoản của thành viên, bao gồm cả các chương trình thành viên thân thiết hoặc các chương trình thưởng đi kèm với tài khoản của thành viên;</li>
                                                    <li><strong>Đặt vé</strong>: TIX sẽ dựa trên thông tin thành viên cung cấp để đặt vé cho thành viên.</li>
                                                    <li><strong>Dịch Vụ Chăm Sóc Thành viên</strong>: để nhận và phản hồi cho các yêu cầu, khiếu nại và phản hồi của thành viên;</li>
                                                    <li><strong>Cá Nhân Hóa</strong>: TIX có thể tổ hợp dữ liệu được thu thập để có một cái nhìn hoàn chỉnh hơn về từng thành viên và từ đó cho phép chúng tôi phục vụ tốt hơn với sự cá nhân hóa mạnh hơn ở các khía cạnh, bao gồm nhưng không giới hạn: (i) để cải thiện và cá nhân hóa trải nghiệm của thành viên trên Ứng dụng TIX (ii) để cải thiện các tiện ích, dịch vụ, điều chỉnh chúng phù hợp với các nhu cầu được cá thể hóa và đi đến những ý tưởng dịch vụ mới (iii) để phục vụ thành viên với những giới thiệu, quảng cáo được điều chỉnh phù hợp với sự quan tâm của thành viên.</li>
                                                    <li><strong>An Ninh</strong>: cho các mục đích ngăn ngừa các hoạt động phá hủy tài khoản người dùng của thành viên hoặc các hoạt động giả mạo thành viên.</li>
                                                    <li><strong>Theo yêu cầu của pháp luật</strong>: tùy quy định của pháp luật vào từng thời điểm, TIX có thể thu thập, lưu trữ và cung cấp theo yêu cầu của cơ quan nhà nước có thẩm quyền.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item" id="nguyentac">
                                        <h2>III. CHÍNH SÁCH CHUYỂN/GIAO NHẬN VÉ</h2>
                                        <div className="m-section">
                                            <p>TIX thu thập thông tin cá nhân nhằm phục vụ cho các mục đích sau:</p>
                                            <div className="n-section px-3">

                                                <ul>
                                                    <li>Thông tin cá nhân của thành viên trên Ứng dụng TIX được TIX cam  kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân của TIX, phù hợp với quy định của Luật Bảo về quyền lợi người tiêu dùng. Việc thu thập và sử dụng thông tin của mỗi Thành viên chỉ được thực hiện khi có sự đồng ý của thành viên đó trừ những trường hợp pháp luật có quy định khác. Thành viên có quyền cung cấp thông tin cá nhân cho TIX và có thể thay đổi quyết định đó vào bất cứ lúc nào.</li>
                                                    <li>Mọi thông tin cá nhân do thành viên cung cấp sẽ được lưu giữ bởi TIX. Nhân viên và Đối tác của TIX trong quá trình thực hiện các mục đích nêu tại Điểm a Điều này có thể tiếp cận với thông tin của thành viên. Những chủ thể này có trách nhiệm giữ bí mật và chỉ được phép sử dụng thông tin của thành viên cho mục đích được chỉ định, không sử dụng cho mục đích của riêng họ (kể cả tiếp thị trực tiếp) trừ khi được thành viên đồng ý.</li>
                                                    <li>Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân thành viên, TIX sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và thông báo cho thành viên được biết.</li>
                                                    <li>Trách nhiệm của thành viên trong quá trình cung cấp và quản lý thông tin:</li>
                                                    <ul >
                                                        <li>Đảm bảo tính xác thực, đầy đủ, chính xác, và cập nhật thường xuyên đối với các thông tin cung cấp cho Ứng dụng TIX và chịu trách nhiệm về tính pháp lý của những thông tin đó. TIX không chịu trách nhiệm cũng như không giải quyết mọi khiếu nại có liên quan đến quyền lợi của Thành viên đó nếu xét thấy thông tin cá nhân thành viên đó cung cấp không chính xác.</li>
                                                        <li>Bảo mật thông tin và lưu giữ mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hộp thư điện tử của mình.</li>
                                                        <li>Thông báo kịp thời cho TIX về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.</li>
                                                    </ul>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item" id="phamvi">
                                        <h2>IV. CHÍNH SÁCH ĐỔI/TRẢ HOÀN TIỀN</h2>
                                        <div className="m-section">
                                            <p>Ứng dụng TIX sử dụng thông tin thành viên cung cấp để:</p>
                                            <div className="n-section px-3">

                                                <ul>
                                                    <li>Xác thực năng lực của thành viên;</li>
                                                    <li>Cung cấp đơn hàng đến cho thành viên;</li>
                                                    <li>Thông tin gửi cho rạp, kiểm tra thông tin để soát vé;</li>
                                                    <li>Gửi các thông báo về các hoạt động trao đổi thông tin giữa các Thành viên và Ứng dụng TIX;</li>
                                                    <li>Ngăn ngừa các hoạt động phá hủy tài khoản người dùng của Thành viên hoặc các hoạt động giả mạo Thành viên;</li>
                                                    <li>Tiến hành các hoạt động tra cứu và phân tích người dùng nhằm nâng cao chất lượng dịch vụ, quản lý và bảo vệ các thông tin, hệ thống kỹ thuật dịch vụ, đo lường hiệu suất dịch vụ do TIX cung ứng và cải thiện sản phẩm, dịch vụ của TIX.</li>
                                                    <li>Liên lạc và giải quyết với thành viên trong những trường hợp đặc biệt;</li>
                                                    <li>Không sử dụng thông tin cá nhân của thành viên ngoài mục đích xác nhận và liên hệ có liên quan đến giao dịch tại Ứng dụng TIX;</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item" id="moreInformation">
                                        <h2>V. CHẤP NHẬN VÀ ĐỒNG Ý CÁC ĐIỀU KHOẢN SỬ DỤNG</h2>
                                        <div className="m-section">
                                            <p>Thông tin về thành viên là một phần dữ liệu quan trọng để TIX có thể khai thác và cải thiện trải nghiệm của thành viên. Và hoạt động kinh doanh của TIX không bao gồm việc bán các thông tin đấy cho bên thứ ba. Chúng tôi chỉ cung cấp thông tin thành viên cho các bên được liệt kê dưới đây, hoặc cho bên thứ ba nhằm đảm bảo quyền lợi của thành viên theo những cam kết bảo mật của TIX.</p>
                                            <div className="n-section px-3">
                                                <ul>
                                                    <li>Xác thực năng lực của thành viên;</li>
                                                    <li>Cung cấp đơn hàng đến cho thành viên;</li>
                                                    <li>Thông tin gửi cho rạp, kiểm tra thông tin để soát vé;</li>
                                                    <li>Gửi các thông báo về các hoạt động trao đổi thông tin giữa các Thành viên và Ứng dụng TIX;</li>
                                                    <li>Ngăn ngừa các hoạt động phá hủy tài khoản người dùng của Thành viên hoặc các hoạt động giả mạo Thành viên;</li>
                                                    <li>Tiến hành các hoạt động tra cứu và phân tích người dùng nhằm nâng cao chất lượng dịch vụ, quản lý và bảo vệ các thông tin, hệ thống kỹ thuật dịch vụ, đo lường hiệu suất dịch vụ do TIX cung ứng và cải thiện sản phẩm, dịch vụ của TIX.</li>
                                                    <li>Liên lạc và giải quyết với thành viên trong những trường hợp đặc biệt;</li>
                                                    <li>Không sử dụng thông tin cá nhân của thành viên ngoài mục đích xác nhận và liên hệ có liên quan đến giao dịch tại Ứng dụng TIX;</li>
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
                                        href="#mucdichthuthap">I. CHÍNH SÁCH VÀ QUY ĐỊNH CHUNG</a>
                                </div>
                            </li>
                            <li >
                                <div className="p-0">
                                    <a ui-sref="main.policy" title="Chính sách bảo mật"
                                        href="#phamvithuthap">II. ĐẶT VÉ VÀ THANH TOÁN TRÊN TIX</a>
                                </div>
                            </li>
                            <li>
                                <div className="p-0">
                                    <a ui-sref="main.faq" title="FAQ"
                                        href="#nguyentac">III. CHÍNH SÁCH CHUYỂN/GIAO NHẬN VÉ</a>
                                </div>
                            </li>
                            <li>
                                <div className="p-0">
                                    <a ui-sref="main.faq" title="FAQ"
                                        href="#phamvi">IV. CHÍNH SÁCH ĐỔI/TRẢ HOÀN TIỀN</a>
                                </div>
                            </li>
                            <li>
                                <div className="p-0">
                                    <a ui-sref="main.faq" title="FAQ"
                                        href="moreInformation">V. CHẤP NHẬN VÀ ĐỒNG Ý CÁC ĐIỀU KHOẢN SỬ DỤNG</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

        );
    }
}

export default ThoaThuanPage;
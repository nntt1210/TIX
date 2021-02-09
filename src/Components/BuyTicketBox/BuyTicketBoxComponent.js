import React, { Component } from "react";
// import "../../css/main.css";

export default class BuyTicketBoxComponent extends Component {
  render() {
    return (
      <div className="buyTicketsBox">
        <div className="row m-0">
          <div className="col-4 selectMovie dropdown">
            <div
              className="selectMenu border-right"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Phim
            </div>
            <ul className="dropdown-menu selectScroll">
              <li>
                <a href="#">Ác Quỷ Đối Đầu - Deliver Us From Evil - (C18)</a>
              </li>
              <li>
                <a href="#">Tenet - (C16)</a>
              </li>
              <li>
                <a href="#">Ròm - (C18)</a>
              </li>
              <li>
                <a href="#">Vì Sao Đưa Bạn Tới - Jungle Beat - (P)</a>
              </li>
              <li>
                <a href="#">Bà Tôi Là Công Chúa - Oh! My Gran - (C16)</a>
              </li>
              <li>
                <a href="#">Bẫy Trăng Máu - Hunter's Moon (NC18)</a>
              </li>
              <li>
                <a href="#">Phòng Thủ Địa Cầu - Invasion (NC16)</a>
              </li>
              <li>
                <a href="#">Mượn Xác - Unfamiliar - (C18)</a>
              </li>
              <li>
                <a href="#">Trò Chơi Của Quỷ - Await the Dawn (C18)</a>
              </li>
              <li>
                <a href="#">
                  Xứ Sở Phép Thuật - The Magic Kids: Three Unlikely Heroes (P)
                </a>
              </li>
              <li>
                <a href="#">
                  Greenland: Thảm Hoạ Thiên Thạch - Greenland - (C16)
                </a>
              </li>
              <li>
                <a href="#">Dinh Thự Xác Sống - Zombie Mansion</a>
              </li>
              <li>
                <a href="#">Chiếc Ba Lô Đẫm Máu - Range Runners (C18)</a>
              </li>
              <li>
                <a href="#">Ác Nữ - Bloodlust Lady - (C18)</a>
              </li>
              <li>
                <a href="#">
                  Tâm Tư Cất Lời - Break The Silence: The Movie - (P)
                </a>
              </li>
              <li>
                <a href="#">
                  Gia Đình Chân To Phiêu Lưu Ký - Bigfoot Family (P)
                </a>
              </li>
              <li>
                <a href="#">Nàng Tiên Cá Ở Paris - A Mermaid in Paris</a>
              </li>
              <li>
                <a href="#">Antebellum: Bẫy Thực Tại Kinh Hoàng - (C18)</a>
              </li>
              <li>
                <a href="#">Dị Nhân Thế Hệ Mới - The New Mutants - (C16)</a>
              </li>
              <li>
                <a href="#">
                  Đầu Gấu Bắc Cực: Kỳ Nghỉ Vui Nhộn - Norm of the North: Family
                  Vacation - (P)
                </a>
              </li>
              <li>
                <a href="#">
                  Học Viện Quái Vật: Du Học Sinh - Cranston Academy: Monster
                  Zone - (P)
                </a>
              </li>
              <li>
                <a href="#">
                  Phù Thủy Tối Thượng (chiếu lại) - Doctor Strange (NC16)
                </a>
              </li>
              <li>
                <a href="#">Đối Đầu - Hard Kill - (C18)</a>
              </li>
              <li>
                <a href="#">Hầm Quỷ - Behind You - (C18)</a>
              </li>
              <li>
                <a href="#">Cá Sấu Tử Thần - Black Water: Abyss - (C18)</a>
              </li>
              <li>
                <a href="#">Bán Đảo - Peninsula - (C18)</a>
              </li>
              <li>
                <a href="#">Ngôi Đền Kì Quái - Pee Nak 2 - (C16)</a>
              </li>
            </ul>
          </div>
          <div className="col-2 selectCinema dropdown">
            <div
              className="selectMenu border-right"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Rạp
            </div>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Vui lòng chọn rạp</a>
              </li>
            </ul>
          </div>
          <div className="col-2 selectDate dropdown">
            <div
              className="selectMenu border-right"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Ngày xem
            </div>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Vui lòng chọn rạp và phim</a>
              </li>
            </ul>
          </div>
          <div className="col-2 selectTime dropdown">
            <div
              className="selectMenu border-right"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Suất chiếu
            </div>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Vui lòng chọn rạp, phim và ngày xem</a>
              </li>
            </ul>
          </div>
          <div className="col-2 buyNow">
            <button type="button" className="btn btn-primary">
              Mua vé ngay
            </button>
          </div>
        </div>
      </div>
    );
  }
}

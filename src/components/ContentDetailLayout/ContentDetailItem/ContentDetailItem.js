import React, { Component } from 'react';
import { connect } from 'react-redux';


class ContentDetailItem extends Component {

    //not runing this function
    renderTimeTable = () => {
        const { cumRapChieu } = this.props;
        console.log("ContentDetailItemArr", cumRapChieu);
        var newShowCumRap = cumRapChieu.slice(0, 7);
        if (cumRapChieu) {
            return cumRapChieu.map((item) => {
                var newItem = item.lichChieuPhim.slice(0, 7);
                return newItem.map((detail) => {
                    var timeofStart = new Date(detail.ngayChieuGioChieu).toLocaleTimeString();
                    var timeofEnd = timeofStart + detail.thoiLuong / 60;
                    console.log("Time", detail, timeofStart, timeofEnd);
                    return (
                        <a>{timeofStart} <br /> ~ {timeofEnd}</a>
                    );
                })

            })
        }

    }

    render() {
        const { cumRapChieu } = this.props;
        console.log("NHQT", cumRapChieu);
        return (
            <div className="tab-pane dateLine show fade" id={cumRapChieu[0].maCumRap}>
                <div className="wrapMovie" >
                    <div className="movieInfo " data-toggle="collapse" href="#cinema-28-film-2123" aria-expanded="true">
                        <img className="movieImg" src="./img/rom-c18-15996245056088_60x60.png" alt />
                        <div className="wrapInfo">
                            <p>
                                <span className="cineTitle">{cumRapChieu[0].tenCumRap}</span>
                                <span className="cineAddress">Le Van Viet</span>
                            </p>
                            <p>18 Pham van dong</p>
                        </div>
                    </div>
                    <div className="movieSession collapse in collapse "
                        id="cinema-28-film-2123" aria-expanded="true">
                        <div>2D Digital</div>
                        <div className=" row sessions ">
                            {this.renderTimeTable()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentDetailItem;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader';
import ContentDetailItem from './ContentDetailItem/ContentDetailItem';
import DateOfWeek from './DateOfWeek/DateOfWeek';



class ContentDetailLayout extends Component {

    renderSectionHtml = () => {
        return (
            <div className="col-xs-12 lichChieu bg-white p-0 active show"
                id="detailCinemaComplex">
                <ul className="nav nav-tabs listCinemas" role="tablist">
                    {this.renderCumRapMain()}
                </ul>
                <div id="listDayOfWeek" className="blockSession tab-content float-left" >
                    {this.renderHeThongRapChieu()}
                </div>

            </div >
        )
    };
    renderCumRapMain = () => {
        const { cumRap } = this.props;
        console.log("renderCumRapMain", cumRap);
        return cumRap.map((item) => {
            return (
                <li className="nav-item" role="presentation">
                    <a className="nav-link tabcinema d-flex "
                        id={`${item.maHeThongRap}-tab`}
                        data-toggle="tab"
                        data-target={`#${item.maHeThongRap}`}
                        // href={`#${item.maHeThongRap}`} 
                        role="tab" aria-controls={item.maHeThongRap} aria-selected="true">
                        <img src={item.logo} alt style={{ width: 60 }, { height: 60 }} />
                        <div className="tabcinema px-3">
                            <div className="nameCine ng-binding  ">{item.tenHeThongRap}</div>
                            <div className="pcinema-promotion ng-binding" />
                        </div>

                    </a>
                </li>

            )
        })
    };
    renderHeThongRapChieu = () => {
        const { heThongRapChieu } = this.props;
        console.log("heThongRapChieu", heThongRapChieu);
        return heThongRapChieu.map((item) => {
            console.log("item", item);
            return (
                <div id={`${item.maHeThongRap}`} className="tab-pane dateLine"
                    role="tabpanel" aria-labelledby={`${item.maHeThongRap}-tab`}>
                    <ul className="wrapDayOfWeek nav nav-tabs d-flex selectScroll">
                        <DateOfWeek dateOfWeek={item.cumRapChieu} />
                    </ul>

                    <div className=" wrapMovie DayOfWeek m-0">

                    </div>

                    <div className="tab-content ">
                        <ContentDetailItem cumRapChieu={item.cumRapChieu} />

                    </div>

                </div>

            )
        })
    }

    render() {
        return (
            <div className="mainMaxWidth2" id="contentDetailLayout">
                <ul className="nav navCenter">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" data-target="#showingSession">Lịch Chiếu</a>
                        <div className="wing wingLeft" />
                        <div className="wing wingRight" />
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" data-target="#showingInfo">Thông Tin</a>
                        <div className="wing wingLeft" />
                        <div className="wing wingRight" />
                    </li>
                    <li className="nav-item">
                        <a className="nav-link commentTab" data-toggle="tab" data-target="#showingReviewer">Đánh Giá</a>
                        <div className="wing wingLeft" />
                        <div className="wing wingRight" />
                    </li>
                </ul>

                <div className="tab-content tabContentDetail">
                    <div id="showingInfo" className="tab-pane fade">
                        <div id="homeNewsMain">
                            <div className="row isFlex detailMainStyle">
                                <div className="col-sm-6 col-xs-12 film left">
                                    <div className="row rowLeftInfo">
                                        <p className="contentTitle">Ngày công chiếu</p>
                                        <p className="contentInfo ng-binding">12.02.2021</p>
                                    </div>
                                    <div className="row rowLeftInfo">
                                        <p className="contentTitle">Đạo diễn</p>
                                        <p className="contentInfo ng-binding"> Kwon Oh-Kwang </p>
                                    </div>
                                    <div className="row rowLeftInfo">
                                        <p className="contentTitle">Diễn viên</p>
                                        <p className="contentInfo ng-binding" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xs-12 film right">
                                    <div className="row rowLeftInfo">
                                        <p className="contentTitle">Nội dung</p>
                                    </div>
                                    <div className="row rowLeftInfo">
                                        <p className="contentInfoFull description ng-binding">“Jack chột” - cao thủ chuyên đi lừa bịp tại sòng bài lập ra một nhóm những người mong muốn có cơ hội đổi đời bằng cờ bạc. Đỏ hay đen thì 30 vẫn chưa phải Tết!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="showingSession" className="tab-pane active fade ">
                        {this.renderSectionHtml()}
                    </div>

                    <div id="showingReviewer" className="tab-pane fade">
                        <div className="row detailMainStyle mx-0">
                            <div className="col-sm-12 col-xs-12 p-3 newDesign" >
                                <span className="imgReviewer">
                                    <img src="./img/avatar.png" />
                                </span>
                                <input className="inputReviwer" type="text" placeholder="Bạn nghĩ gì về phim này?" readOnly="readonly" />
                                <span className="imgReviewerStar">
                                    <img src="./img/star1.png" />
                                    <img src="./img/star1.png" />
                                    <img src="./img/star1.png" />
                                    <img src="./img/star1.png" />
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.reducerSecondPage.isLoading,
        heThongRapChieu: state.reducerSecondPage.heThongRapChieu,
        cumRap: state.reducerCumRap.cinemasList,
    };
}
export default connect(
    mapStateToProps,
)(ContentDetailLayout);
import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class CineList extends Component {
    render() {
        const { listCine } = this.props;
        console.log("tenRApList", listCine);
        return listCine.map((item) => {
            return (
                <li className="nav-item" role="presentation">
                    <a className="cinema-item active" id="bitexco-tab" data-toggle="tab" data-target={item.maCumRap} href={`#${item.maCumRap}`} role="tab" aria-controls="bitexco" aria-selected="true">
                        <img className="cinemaImg" src={item.logo} alt />
                        <span className="cinemaInfo">
                            <span className="cinemaName">
                                <span className="colorCinema BHD">
                                    {item.tenCumRap.split("-")}
                                </span>
                                    -
                                </span>
                            <span className="cinemaAddress">
                                {item.diaChi}
                            </span>
                            <span className="redDetail" onclick="window.location='https://tix.vn/rap-chieu-phim/28-bhd-star-cineplex-icon-68'">
                                [chi tiết]
                                                </span>
                        </span>
                    </a>
                </li>
            );
        })

    }
}

export default connect(
    mapStateToProps,
)(CineList);
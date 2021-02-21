import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDataModal } from "../../containers/HomeTemplate/CarouselPage/module/action";


function mapStateToProps(state) {
    return {

    };
}

class OwlItem extends Component {
    render() {
        const { item } = this.props;
        console.log("OwlItem", item);
        if (item && item.length > 0) {
            return item.map(item => {
                return (
                    <div className="item col-xs-12 block" style={{ height: 600 }}>
                        <a href="https://tix.vn/phim/2123-tenet">
                            <img src={item.hinhAnh} className="d-block w-100 " alt="..." />
                        </a>
                        <button type="button" className="playTrailer showHover" data-toggle="modal" data-target="#Modal" onClick={() => { this.props.displayModal(item) }}>
                            <span className="d-none">{item.trailer}</span>
                            <img src="./img/play-video.png" alt />
                        </button>
                    </div>
                );
            })
        }

    }
}
function mapDispatchToProps(dispatch) {
    return {
        displayModal: (data) => {
            dispatch(getDataModal(data));
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OwlItem);
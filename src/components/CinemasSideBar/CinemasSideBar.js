import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actCallDetailCinemas } from "../../containers/HomeTemplate/CumRapPage/modules/action";



class CinemasSideBar extends Component {
    // componentDidMount(props) {
    //     console.log("CinemasContent", props);
    // }
    handleCall = (cinemasList) => {
        if (cinemasList && cinemasList.length > 0) {
            return cinemasList.map(item => {
                return (
                    <>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id={`#${item.tenHeThongRap}`} data-toggle="tab" data-target={`#${item.maHeThongRap}`} role="tab" aria-controls="BHD" aria-selected="true">
                                <img src={item.logo} onClick={() => { this.props.handleCallCinemas(item.maHeThongRap) }}/>
                            </a>
                        </li>
                    </>
                )
            })
        }
    }
    render() {
        const { cinemasList } = this.props;
        console.log("CinemasContent", cinemasList);
        return (
            <>
                { this.handleCall(cinemasList)}
            </>
        )

    }
}
function mapStateToProps(state) {
    return {

    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleCallCinemas: (data) => {
            dispatch(actCallDetailCinemas(data))
        }
    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(CinemasSideBar);
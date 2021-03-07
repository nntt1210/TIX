import React, { Component } from 'react';
import { connect } from 'react-redux';



class DateOfWeek extends Component {


    render() {
        const { dateOfWeek } = this.props;
        if (dateOfWeek)
            console.log("NHQT-dateOfWeek", dateOfWeek[0].lichChieuPhim);
        var newDateofWeek = dateOfWeek[0].lichChieuPhim.slice(0, 7);
        return newDateofWeek.map((index) => {
            return (
                <li className="selectDate align-item-center nav-item" >
                    <a className="nav-link p-0 active" data-toggle="tab"
                        data-target={`#${dateOfWeek[0].maCumRap}`} href={`#${dateOfWeek[0].maCumRap}`}
                        role="tab" aria-controls={`#${dateOfWeek[0].maCumRap}`} aria-selected="false">
                        <p className="day " >Thứ 2</p>
                        <p className="date " ></p>
                    </a>
                </li>
            );
        })

    }
}

export default DateOfWeek;
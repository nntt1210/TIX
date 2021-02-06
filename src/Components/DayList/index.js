import React, { Component } from "react";
import DayOfWeek from "./../DayOfWeek";

export default class DayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { day: "Thứ 3", date: "01" },
        { day: "Thứ 4", date: "02" },
        { day: "Thứ 5", date: "03" },
        { day: "Thứ 6", date: "04" },
        { day: "Thứ 7", date: "05" },
        { day: "Chủ Nhật", date: "06" },
        { day: "Thứ 2", date: "07" },
      ],
    };
  }

  render() {
    const { list } = this.state;
    return list.map((item, index) => {
      if (index == 0) {
        return (
          <DayOfWeek
            active={true}
            day={item.day}
            date={item.date}
            onClick={() => this.props.onClick(item.date)}
          />
        );
      } else
        return (
          <DayOfWeek
            active={false}
            day={item.day}
            date={item.date}
            onClick={() => this.props.onClick(item.date)}
          />
        );
    });
  }
}

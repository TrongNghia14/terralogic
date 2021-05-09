import React, { Component } from "react";
import Box from "./box";
import iconBoxTime from "../asset/icon/box_time.svg";
import iconBoxCalendar1 from "../asset/icon/box_calendar1.svg";
import iconBoxCalendar2 from "../asset/icon/box_calendar2.svg";
import iconBoxChart from "../asset/icon/box_chart.svg";
import { Space } from "antd";

class ListBox extends Component {
  render() {
    return (
      <div className="list-box">
        <Space size={15}>
          <Box
            src={iconBoxTime}
            content="Total hours of timeoff"
            color="#07A0F7"
            number="150"
          />
          <Box
            src={iconBoxCalendar1}
            content="Timeoff scheduled this month"
            color="#EA4C89"
            number="150"
          />
          <Box
            src={iconBoxCalendar2}
            content="Total hours taken this year"
            color="#2C6DF9"
            number="150"
          />
          <Box
            src={iconBoxChart}
            content="Current PTO Liability"
            color="#00C598"
            number="150"
          />
        </Space>
      </div>
    );
  }
}

export default ListBox;

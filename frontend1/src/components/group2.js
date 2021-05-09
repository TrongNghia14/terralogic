import { Button, Space } from "antd";
import React, { Component } from "react";

class Group2 extends Component {
  render() {
    return (
      <div className="group2">
        <Space size={20}>
          <div className="span">Timeoff Overview</div>
          <div className="span">Employee Directory</div>
          <div className="span">Policis</div>
        </Space>
        <Space size={32}>
          <Button>Generate Report for Time off</Button>
          <Button>View Activity log (15)</Button>
        </Space>
      </div>
    );
  }
}

export default Group2;

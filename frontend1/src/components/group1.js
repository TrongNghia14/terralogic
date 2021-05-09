import { Button, Space } from "antd";
import React, { Component } from "react";
import iconMenuHome from "../asset/icon/menu/menu_ home.svg";
import iconX from "../asset/icon/x.svg";
import iconX2 from "../asset/icon/x2.svg";
class Group1 extends Component {
  render() {
    return (
      <div className="group1">
        <Space size={20}>
          <Button type="primary">
            <img src={iconMenuHome} />
            <span>Home</span>
          </Button>
          <div className="text">
            Employee Directory
            <img src={iconX} />
          </div>
          <div className="text text-t2">
            Timeoff
            <img src={iconX2} />
          </div>
        </Space>
      </div>
    );
  }
}

export default Group1;

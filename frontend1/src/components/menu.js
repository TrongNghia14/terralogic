import React, { Component } from "react";
import { Menu } from "antd";
import iconCalendar from "../asset/icon/menu/calendar.svg";
import iconMenuHome from "../asset/icon/menu/menu_ home.svg";
import iconNew from "../asset/icon/menu/newspaper.svg";
import iconPage from "../asset/icon/menu/page.svg";
import iconTime from "../asset/icon/menu/time.svg";
import { Link } from "react-router-dom";
class Dashboard extends Component {
  render() {
    return (
      <Menu mode="inline" className="bg-left-menu">
        <Menu.Item className="menu item ">
          <img src={iconCalendar} className="img" />
        </Menu.Item>
        <Menu.Item className="menu item">
          <img src={iconMenuHome} className="img" />
        </Menu.Item>
        <Menu.Item className="menu item">
          <img src={iconPage} className="img" />
        </Menu.Item>
        <Menu.Item className="menu item">
          <Link to="/">
            <img src={iconNew} className="img" />
          </Link>
        </Menu.Item>
        <Menu.Item className="menu item">
          <img src={iconTime} className="img" />
        </Menu.Item>
      </Menu>
    );
  }
}

export default Dashboard;

import React, { Component } from "react";
import iconMenu from "../asset/icon/header/iconmenu.svg";
import iconAd from "../asset/icon/header/ad.svg";
import iconBell from "../asset/icon/header/bell.svg";
import iconCalendar from "../asset/icon/header/calendar.svg";
import iconSearch from "../asset/icon/header/search.svg";
import logo from "../asset/image/logo.png";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";

class Topbar extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="left">
          <Button className="icon">
            <img src={iconMenu} />
          </Button>
          <Link to="/">
            <img src={logo} className="logo" />
          </Link>
        </div>

        <Space size={32}>
          <Button shape="circle" className="btn btn-search">
            <img src={iconSearch} />
          </Button>
          <Button shape="circle" className="btn btn-calendar">
            <img src={iconCalendar} />
          </Button>
          <Button shape="circle" className="btn btn-bell">
            <img src={iconBell} />
          </Button>
          <Button shape="circle" className="btn btn-ad">
            <img src={iconAd} />
          </Button>
        </Space>
      </div>
    );
  }
}

export default Topbar;

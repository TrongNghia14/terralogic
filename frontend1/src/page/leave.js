import React, { Component } from "react";
import { Layout } from "antd";
import Dashboard from "./../components/menu";
import Topbar from "./../components/header";
import Group2 from "./../components/group2";
import Group1 from "../components/group1";
import ListBox from "../components/listBox";
import ListLeaveRequest from "../components/ListLeaveRequest";

const { Sider, Content } = Layout;
class PageLeave extends Component {
  render() {
    return (
      <Layout>
        <Topbar />
        <Layout>
          <Sider className="sider">
            <Dashboard />
          </Sider>
          <Content>
            <Group1 />
            <Group2 />
            <ListBox />
            <ListLeaveRequest />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default PageLeave;

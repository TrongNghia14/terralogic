import React, { Component } from "react";
import { Layout } from "antd";
import Dashboard from "../components/menu";
import Topbar from "../components/header";
import Group2 from "../components/group2";
import Group1 from "../components/group1";
import ListBox from "../components/listBox";
import Routeas from "../router/router";

const { Header, Footer, Sider, Content } = Layout;
class AddLeave extends Component {
  render() {
    return (
      <Layout>
        <Topbar />
        <Layout>
          <Sider className="sider">
            <Dashboard />
          </Sider>
          <Content></Content>
        </Layout>
      </Layout>
    );
  }
}

export default AddLeave;

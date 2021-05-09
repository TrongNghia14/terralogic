import "antd/dist/antd.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, List } from "antd";
import Dashboard from "./components/menu";
import Topbar from "./components/header";
import Group2 from "./components/group2";
import Group1 from "./components/group1";
import ListLeaveRequest from "./components/ListLeaveRequest";
import AddNewLeaveRequest from "./components/AddNewLeaveRequest";
import UpdateLeaveRequest from "./components/UpdateLeaveRequest";

const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Topbar />
          <Layout>
            <Sider className="sider">
              <Dashboard />
            </Sider>
            <Content>
              <Group1 />
              <Group2 />
              <Switch>
                <Route path="/" exact component={ListLeaveRequest}></Route>
                <Route
                  path="/add-leave-request"
                  component={AddNewLeaveRequest}
                ></Route>
                <Route
                  path="/update-leave-request/:id"
                  component={UpdateLeaveRequest}
                ></Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

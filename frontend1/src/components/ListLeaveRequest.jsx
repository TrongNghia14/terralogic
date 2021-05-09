import React, { Component } from "react";
import { Button, Pagination, Space } from "antd";
import LeaveService from "../services/LeaveService";
import axios from "axios";
import { Link } from "react-router-dom";
import ListBox from "./listBox";

class ListLeaveRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leaveRequests: [],
      totalItem: 0,
      page: 1,
      type: "all",
      isSearch: false,
      selectedItem: "",
    };
    this.editLeaveRequest = this.editLeaveRequest.bind(this);
    this.deleteLeaveRequest = this.deleteLeaveRequest.bind(this);
  }

  // Delete
  deleteLeaveRequest(id) {
    LeaveService.deleteLeaveRequestById(id).then((res) => {
      this.setState({
        leaveRequests: this.state.leaveRequests.filter(
          (leaveRequest) => leaveRequest.id !== id
        ),
      });
    });
  }
  // ---- End delete

  //Update
  editLeaveRequest(id) {
    this.props.history.push(`/update-leave-request/${id}`);
  }
  // ---- End update

  onChange = (page) => {
    console.log(page);
    this.setState({ page: page });
  };
  componentDidMount() {
    // LeaveService.getLeaveRequestByType().then((res) => {
    //     this.setState({leaveRequests: res.data.listResult});
    // });
    this.getData(this.state.page, this.state.type);
  }

  componentDidUpdate(nextProp, nextState) {
    if (this.state.page !== nextState.page)
      this.getData(this.state.page, this.state.type);
    if (this.state.isSearch) {
      console.log(this.state.type);
      this.getData(this.state.page, this.state.type.replace(/\s/g, ""));
      this.setState({ isSearch: false });
    }
  }

  getData = async (page, type) => {
    let res;
    try {
      res = await axios.get(
        `http://localhost:8080/api/balance/leave?page=${page}&limit=5&type=${type}`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    this.setState({
      leaveRequests: res.data?.listResult,
      totalItem: res.data?.totalItem,
    });
  };
  changeInput = (e) => {
    if (e.target.value == "") {
      console.log("value", e.target.value);
      this.setState({ type: "casual" });
    } else this.setState({ type: e.target.value });
  };
  clickSearch = () => {
    this.setState({ isSearch: true, page: 1 });
  };
  click1 = (text) => {
    this.setState({ type: text, isSearch: true, page: 1, selectedItem: text });
  };
  render() {
    return (
      <div>
        <ListBox />
        <div className="cover-content">
          <div className="leave">
            <div
              className={`text t1 ${
                this.state.selectedItem === "CasualLeave" ? "text-selected" : ""
              }`}
              onClick={() => this.click1("CasualLeave")}
            >
              <span>Casual Leave</span>
            </div>
            <div
              className={`text t1 ${
                this.state.selectedItem === "SickLeave" ? "text-selected" : ""
              }`}
              onClick={() => this.click1("SickLeave")}
            >
              <span>Sick Leave</span>
            </div>
            <div
              className={`text t1 ${
                this.state.selectedItem === "RestrictedHoliday"
                  ? "text-selected"
                  : ""
              }`}
              onClick={() => this.click1("RestrictedHoliday")}
            >
              <span>Restricted Holiday</span>
            </div>
            <div
              className={`text t1 ${
                this.state.selectedItem === "MaternityLeave"
                  ? "text-selected"
                  : ""
              }`}
              onClick={() => this.click1("MaternityLeave")}
            >
              <span>Maternity Leave</span>
            </div>
            <div
              className={`text t1 ${
                this.state.selectedItem === "PaternityLeave"
                  ? "text-selected"
                  : ""
              }`}
              onClick={() => this.click1("PaternityLeave")}
            >
              <span>Paternity Leave</span>
            </div>
            <div
              className={`text t1 ${
                this.state.selectedItem === "CompOffLeave"
                  ? "text-selected"
                  : ""
              }`}
              onClick={() => this.click1("CompOffLeave")}
            >
              <span>Comp off Leave</span>
            </div>
          </div>
          <div className="table">
            <div className="search">
              <Link to="/add-leave-request">
                <i
                  class="fa fa-plus-square"
                  style={{
                    fontSize: "30px",
                    color: "#2c6df9",
                    marginRight: "10px",
                  }}
                />
              </Link>

              <div class="input-icons">
                <i
                  class="fa fa-search icon"
                  style={{ cursor: "pointer" }}
                  onClick={this.clickSearch}
                >
                  {" "}
                </i>
                <input
                  class="input-field"
                  type="text"
                  placeholder="Search"
                  onChange={(e) => this.changeInput(e)}
                />
              </div>

              <Button>Import Balance</Button>
            </div>
            <hr></hr>
            <div className="content-table">
              <table class="table table-condensed">
                <thead>
                  <tr>
                    {/* <th></th> */}
                    <th>Employee ID</th>
                    <th>Employee name</th>
                    <th>Policy</th>
                    <th>Current Balance</th>
                    <th>Scheduled</th>
                    <th>Active</th>
                  </tr>
                </thead>
                <tbody style={{ height: "100px" }}>
                  {this.state.leaveRequests.map((leaveRequest) => {
                    return (
                      <tr>
                        {/* <td ><input type="checkbox" class="custom-control-input" key = {leaveRequest.id}/></td> */}
                        <td className="id">PSI : {leaveRequest.employee_id}</td>
                        <td>{leaveRequest.fullName}</td>
                        <td>{leaveRequest.policy}</td>
                        <td>{leaveRequest.currentBalance}</td>
                        <td>{leaveRequest.schedule}</td>
                        <td className="active">
                          <Space size={15}>
                            <i
                              class="fa fa-edit"
                              style={{ fontSize: "24px", color: "#2c6df9" }}
                              onClick={() =>
                                this.editLeaveRequest(leaveRequest.id)
                              }
                            />
                            <i
                              class="fa fa-trash"
                              style={{ fontSize: "24px", color: "#2c6df9" }}
                              onClick={() =>
                                this.deleteLeaveRequest(leaveRequest.id)
                              }
                            />
                          </Space>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <hr></hr>
              <Pagination
                total={this.state.totalItem}
                // totalPage={3}
                showTotal={(total, range) =>
                  `showing ${range[0]}-${range[1]} of ${total}`
                }
                pageSize={5}
                current={this.state.page}
                onChange={this.onChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListLeaveRequest;

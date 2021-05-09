import React, { Component } from "react";
import { Button, Pagination } from "antd";

class ContentLeave extends Component {
  render() {
    return (
      <div className="cover-content">
        <div className="leave">
          <div className="text t1">
            <span>Casual Leave</span>
          </div>
          <div className="text t2">
            <span>Sick Leave</span>
          </div>
          <div className="text t3">
            <span>Restricted Holiday</span>
          </div>
          <div className="text t4">
            <span>Maternity Leave</span>
          </div>
          <div className="text t5">
            <span>Paternity Leave</span>
          </div>
          <div className="text t6">
            <span>Comp off Leave</span>
          </div>
        </div>
        <div className="table">
          <div className="search">
            <div class="input-icons">
              <i class="fa fa-search icon"></i>
              <input class="input-field" type="text" placeholder="Search" />
            </div>
            <Button>Import Balance</Button>
          </div>
          <hr></hr>
          <div className="content-table">
            <table class="table table-condensed">
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Employee name</th>
                  <th>Policy</th>
                  <th>Current Balance</th>
                  <th>Scheduled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="id">John</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                </tr>
                <tr>
                  <td className="id">John</td>
                  <td>Moe</td>
                  <td>mary@example.com</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                </tr>
                <tr>
                  <td className="id">John</td>
                  <td>Dooley</td>
                  <td>july@example.com</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentLeave;

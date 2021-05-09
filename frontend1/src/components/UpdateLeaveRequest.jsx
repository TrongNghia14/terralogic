import React, { Component } from "react";
import LeaveService from "../services/LeaveService";

class UpdateLeaveRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      type: "",
      policy: "",
      employeeId: "",
      currentBalance: "",
      schedule: "",
    };

    this.changeTypeHandler = this.changeTypeHandler.bind(this);
    this.changePolicyHandler = this.changePolicyHandler.bind(this);
    this.changeEmployeeIdHandler = this.changeEmployeeIdHandler.bind(this);
    this.changeCurrentBalanceHandler = this.changeCurrentBalanceHandler.bind(
      this
    );
    this.changeScheduleHandler = this.changeScheduleHandler.bind(this);

    this.updateRequest = this.updateRequest.bind(this);
  }

  componentDidMount() {
    LeaveService.getLeaveRequestById(this.state.id).then((res) => {
      let data = res.data;
      this.setState({
        type: data.type,
        policy: data.policy,
        employeeId: data.employee_id,
        currentBalance: data.currentBalance,
        schedule: data.schedule,
      });
    });
  }

  updateRequest = (e) => {
    e.preventDefault();
    let updateLeaveRequest = {
      id: parseInt(this.state.id),
      type: this.state.type,
      policy: this.state.policy,
      employee_id: this.state.employeeId,
      currentBalance: this.state.currentBalance,
      schedule: this.state.schedule,
    };
    console.log("leaveRequest => " + JSON.stringify(updateLeaveRequest));

    LeaveService.updateLeaveRequest(updateLeaveRequest).then((res) => {
      this.props.history.push("/");
    });
  };

  changeTypeHandler = (event) => {
    this.setState({ type: event.target.value });
  };
  changePolicyHandler = (event) => {
    this.setState({ policy: event.target.value });
  };
  changeEmployeeIdHandler = (event) => {
    this.setState({ employeeId: event.target.value });
  };
  changeCurrentBalanceHandler = (event) => {
    this.setState({ currentBalance: event.target.value });
  };
  changeScheduleHandler = (event) => {
    this.setState({ schedule: event.target.value });
  };

  cancel() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Type: </label>
                    <select
                      class="selectpicker"
                      onChange={this.changeTypeHandler}
                      className="form-control"
                    >
                      <option value="Casual Leave">Casual Leave</option>
                      <option value="Sick Leave">Sick Leave</option>
                      <option value="Restricted Holiday">
                        Restricted Holiday
                      </option>
                      <option value="Maternity Leave">Maternity Leave</option>
                      <option value="Paternity Leave">Paternity Leave</option>
                      <option value="Comp Off Leave">Comp Off Leave</option>
                    </select>
                    {/* <input placeholder="Type" name="type" className="form-control" 
                                                value={this.state.type} onChange={this.changeTypeHandler}/> */}
                  </div>
                  <div className="form-group">
                    <label> Policy: </label>

                    <select
                      class="selectpicker"
                      onChange={this.changePolicyHandler}
                      className="form-control"
                    >
                      <option value="Standrad Policy">Standrad Policy</option>
                      <option value="No policy assigned">
                        No policy assigned
                      </option>
                    </select>

                    {/* <input placeholder="Policy" name="policy" className="form-control" 
                                                value={this.state.policy} onChange={this.changePolicyHandler}/> */}
                  </div>
                  <div className="form-group">
                    <label> Employee Id: </label>
                    <select
                      class="selectpicker"
                      onChange={this.changeEmployeeIdHandler}
                      className="form-control"
                    >
                      <option value="1">1 - Mike Alan</option>
                      <option value="2">2 - Emily Susan</option>
                      <option value="3">3 - God Father</option>
                      <option value="4">4 - Mom Nature</option>
                    </select>
                    {/* <input placeholder="Employee Id" name="employee_id" className="form-control" 
                                                value={this.state.employeeId} onChange={this.changeEmployeeIdHandler}/> */}
                  </div>
                  <div className="form-group">
                    <label> Current Balance: </label>
                    <input
                      placeholder="Current Balance"
                      name="currentBalance"
                      className="form-control"
                      type="number"
                      min="0"
                      readonly
                      onKeyDown={(e) => e.preventDefault()}
                      value={this.state.currentBalance}
                      onChange={this.changeCurrentBalanceHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Schedule: </label>
                    <input
                      placeholder="Schedule"
                      name="schedule"
                      className="form-control"
                      type="number"
                      min="0"
                      readonly
                      onKeyDown={(e) => e.preventDefault()}
                      value={this.state.schedule}
                      onChange={this.changeScheduleHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.updateRequest}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateLeaveRequest;

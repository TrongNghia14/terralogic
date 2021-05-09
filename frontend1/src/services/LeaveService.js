import axios from "axios";

const LEAVE_REQUEST_API_GET =
  "http://localhost:8080/api/balance/leave?page=1&limit=5&type=casual";
const LEAVE_REQUEST_API_BASE_URL = "http://localhost:8080/api/balance/leave";

class LeaveService {
  getLeaveRequestByType() {
    return axios.get(LEAVE_REQUEST_API_GET);
  }

  createLeaveRequest(leaveRequest) {
    return axios.post(LEAVE_REQUEST_API_BASE_URL, leaveRequest);
  }

  getLeaveRequestById(idLeaveRequest) {
    return axios.get(LEAVE_REQUEST_API_BASE_URL + "/" + idLeaveRequest);
  }

  updateLeaveRequest(oldLeaveRequest) {
    return axios.put(LEAVE_REQUEST_API_BASE_URL, oldLeaveRequest);
  }

  deleteLeaveRequestById(idLeaveRequest) {
    return axios.delete(LEAVE_REQUEST_API_BASE_URL + "/" + idLeaveRequest);
  }
}

export default new LeaveService();

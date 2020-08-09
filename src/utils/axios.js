import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.common = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMTJkZjc3N2NiMTBhMWI5MDliMjE2NCIsImlhdCI6MTU5NjEyOTY3MywiZXhwIjoxNTk2NDMyMDczfQ.DMoTnx9x6V87bZtzbpg-xgwMJAjihYXat5gzEpm6GEY`,
};
export default axios;

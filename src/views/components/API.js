import axios from "axios";

export default axios.create({
  // baseURL : "http://localhost:88/sts_web_center_new/module/",
  baseURL: "http://localhost:88/sts_web_center/module/",
  responseType: "json",
  // headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
});




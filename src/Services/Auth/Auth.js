import axios from "axios";
const host_addr = "http://localhost:3000";
// const host_addr = "https://linkup-server-a3ar.onrender.com";
class Auth {
  
  login(params) {
    console.log(host_addr);
    return axios.post(`${host_addr}/api/v1/auth/login`, params);
  }

  signup(data) {
    return axios.post(`${host_addr}/api/v1/auth/signup`, data);
  }

  forgotPassword(data) {
    return axios.post(`${host_addr}/api/v1/auth/sendForgotPasswordOtp`, data);
  }

  verifyOtpForgotPassword(data) {
    return axios.post(`${host_addr}/api/v1/auth/verifyOtpForgotPass`, data);
  }
  sendotp(data) {
    return axios.post(`${host_addr}/api/v1/auth/sendotp`, data);
  }

  changePassword(data) {
    return axios.post(`${host_addr}/api/v1/auth/changePassword`, data);
  }
}

export default new Auth();

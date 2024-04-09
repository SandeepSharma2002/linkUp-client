import axios from "../index";

const host_addr = "http://localhost:3000";
// const host_addr = import.meta.env.VITE_SERVER_DOMAIN;

class User {
  getUsers() {
    const accessTokenObject = JSON.parse(localStorage.getItem("access_token"));
    const headers = { Authorization: `Bearer ${accessTokenObject}` };
    return axios.get(`${host_addr}/api/v1/user/get-users`, {headers});
  }

  currentUser(){
    const accessTokenObject = JSON.parse(localStorage.getItem("access_token"));
    const headers = { Authorization: `Bearer ${accessTokenObject}` };
    return axios.get(`${host_addr}/api/v1/user/current-user`, {headers});
  }
  
  searchUsers(params) {
    const accessTokenObject = JSON.parse(localStorage.getItem("access_token"));
    const headers = { Authorization: `Bearer ${accessTokenObject}` };
    return axios.get(`${host_addr}/api/v1/user/search-users`, {headers,params});
  }

  
}

export default new User();

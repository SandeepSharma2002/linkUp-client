import axios from "../index";
const host_addr = import.meta.env.VITE_SERVER_DOMAIN;

class Chat {

  accessChat(body) {
    const accessTokenObject = JSON.parse(localStorage.getItem("access_token"));
    const headers = { Authorization: `Bearer ${accessTokenObject}` };
    return axios.post(`${host_addr}/api/v1/chats/accessChat`, body, {
      headers,
    });
  }

  fetchChats() {
    const accessTokenObject = JSON.parse(localStorage.getItem("access_token"));
    const headers = { Authorization: `Bearer ${accessTokenObject}` };
    return axios.get(`${host_addr}/api/v1/chats/fetchChats`, {
      headers,
    });
  }



  // getLatestPosts(params) {
  //   const accessTokenObject = JSON.parse(localStorage.getItem("access_token"));
  //   const headers = { Authorization: `Bearer ${accessTokenObject}` };
  //   return axios.get(`${host_addr}/api/v1/posts/latest-posts`, { headers, params });
  // }

  // searchPosts(params) {
  //   const accessTokenObject = JSON.parse(localStorage.getItem("access_token"));
  //   const headers = { Authorization: `Bearer ${accessTokenObject}` };
  //   return axios.get(`${host_addr}/api/v1/posts/search-posts`, { headers, params });
  // }

  // getTrendingPosts(params) {
  //   const accessTokenObject = JSON.parse(localStorage.getItem("access_token"));
  //   const headers = { Authorization: `Bearer ${accessTokenObject}` };
  //   return axios.get(`${host_addr}/api/v1/posts/trending-posts`, { headers, params });
  // }

  // likePost(body) {
  //   const accessTokenObject = JSON.parse(localStorage.getItem("access_token"));
  //   const headers = { Authorization: `Bearer ${accessTokenObject}` };
  //   return axios.post(`${host_addr}/api/v1/posts/like-post`, body, {
  //     headers,
  //   });
  // }

  // isLikedPost(params) {
  //   const accessTokenObject = JSON.parse(localStorage.getItem("access_token"));
  //   const headers = { Authorization: `Bearer ${accessTokenObject}` };
  //   return axios.get(`${host_addr}/api/v1/posts/isliked-by-user`, {
  //     headers, params
  //   });
  // }

  // commentPost(body) {
  //   const accessTokenObject = JSON.parse(localStorage.getItem("access_token"));
  //   const headers = { Authorization: `Bearer ${accessTokenObject}` };
  //   return axios.post(`${host_addr}/api/v1/posts/comment`, body, { headers });
  // }

  // getPostTags() {
  //   const accessTokenObject = JSON.parse(localStorage.getItem("access_token"));
  //   const headers = { Authorization: `Bearer ${accessTokenObject}` };
  //   return axios.get(`${host_addr}/api/v1/posts/tags`, { headers });
  // }

  // getPostComments(params) {
  //   const accessTokenObject = JSON.parse(localStorage.getItem("access_token"));
  //   const headers = { Authorization: `Bearer ${accessTokenObject}` };
  //   return axios.get(`${host_addr}/api/v1/posts/get-post-comments`, { headers, params });
  // }

  // getCommentReplies(params) {
  //   const accessTokenObject = JSON.parse(localStorage.getItem("access_token"));
  //   const headers = { Authorization: `Bearer ${accessTokenObject}` };
  //   return axios.get(`${host_addr}/api/v1/posts/get-replies`, { headers, params });
  // }

  // getNotificationsCount(params) {
  //   const accessTokenObject = JSON.parse(localStorage.getItem("access_token"));
  //   const headers = { Authorization: `Bearer ${accessTokenObject}` };
  //   return axios.get(`${host_addr}/api/v1/posts/get-notifications-count`, { headers, params });
  // }

  // getNotifications(params) {
  //   const accessTokenObject = JSON.parse(localStorage.getItem("access_token"));
  //   const headers = { Authorization: `Bearer ${accessTokenObject}` };
  //   return axios.get(`${host_addr}/api/v1/posts/get-notifications`, { headers, params });
  // }

  // deletePost(params) {
  //   const accessTokenObject = JSON.parse(localStorage.getItem("access_token"));
  //   const headers = { Authorization: `Bearer ${accessTokenObject}` };
  //   return axios.get(`${host_addr}/api/v1/posts/delete-post`, { headers, params });
  // }

  // deleteComment(params) {
  //   const accessTokenObject = JSON.parse(localStorage.getItem("access_token"));
  //   const headers = { Authorization: `Bearer ${accessTokenObject}` };
  //   return axios.get(`${host_addr}/api/v1/posts/delete-comment`, { headers, params });
  // }

}

export default new Chat();

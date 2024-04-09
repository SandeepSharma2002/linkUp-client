import axios from 'axios'
const host_addr = import.meta.env.VITE_SERVER_DOMAIN;

const instance = axios.create()
export default instance
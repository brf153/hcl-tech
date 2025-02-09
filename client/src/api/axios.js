import axios from 'axios';

console.log("Checking env", process.env.REACT_APP_API_URL);
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default axiosInstance;
import axios from 'axios'

const axiosInstance = axios.create({
  //baseURL: "https://fastrack-backend.onrender.com/api",
  baseURL: "http://localhost:5000/api",
});

export default axiosInstance
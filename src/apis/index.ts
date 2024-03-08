import axios from 'axios';

const authAxiosInstance = axios.create({
  baseURL: 'http://localhost:3010/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const serviceAxiosInstance = axios.create({
  baseURL: 'http://localhost:3050/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const axiosInstanceObj = {
  serviceAxiosInstance,
  authAxiosInstance,
};

export default axiosInstanceObj;

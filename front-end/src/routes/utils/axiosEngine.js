/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
});

export default axiosInstance;

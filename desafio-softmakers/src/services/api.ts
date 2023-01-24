import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-softmakers.onrender.com',
});

export default api;

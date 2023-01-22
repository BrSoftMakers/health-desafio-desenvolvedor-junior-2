import axios from 'axios';

const api = axios.create({
  baseURL: 'https://desafio-softmakers.onrender.com',
});

export default api;

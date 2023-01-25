import axios from './axiosEngine';

const BASE_PATH = 'api/usuarios';

const login = async (body) => axios.post(`${BASE_PATH}/login`, body, { withCredentials: true });

const register = async (body) => axios.post(`${BASE_PATH}/register`, body);

export {
  login,
  register,
};

import axios from './axios';

const BASE_PATH = 'pets';

const list = async () => axios.get(`${BASE_PATH}`);

const findById = async (id) => axios.get(`${BASE_PATH}/${id}`);

const create = async (body) => axios.post(`${BASE_PATH}`, body);

const update = async (id, body) => axios.put(`${BASE_PATH}/${id}`, body);

const remove = async (id) => axios.delete(`${BASE_PATH}/${id}`);

export {
  list,
  findById,
  create,
  update,
  remove,
};

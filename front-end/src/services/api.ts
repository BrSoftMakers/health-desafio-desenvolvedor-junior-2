import axios from "axios";

const api = axios.create({
  baseURL: "localhost:3030/pets",
});

export default api;

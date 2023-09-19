import axios from "axios";

const userFetch = axios.create({
  baseURL: "http://localhost:8000/api/",
});
// https://www.devmedia.com.br/consumindo-uma-api-com-vue-js-e-axios/42974
userFetch.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default userFetch;

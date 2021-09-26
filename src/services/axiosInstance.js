import Axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api';

const axiosInstance = Axios.create({
  baseURL: baseURL,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

axiosInstance.interceptors.request.use(
  (config) => config,

  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response.data,

  (error) => Promise.reject(error?.response)
);

export default axiosInstance;

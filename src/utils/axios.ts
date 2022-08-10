import axios from 'axios';

// ----------------------------------------------------------------------

import { BASE } from '../api/useAPI'

//const axiosInstance = axios.create({ baseURL: process.env.HOST_API_KEY || '' });
const axiosInstance = axios.create({ baseURL: BASE });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

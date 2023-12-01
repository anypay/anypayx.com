import axios from 'axios';

// ----------------------------------------------------------------------

import { API_BASE } from '../api/useAPI'

const axiosInstance = axios.create({ baseURL: API_BASE });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

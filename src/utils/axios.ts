import axios from 'axios';

// ----------------------------------------------------------------------

//const axiosInstance = axios.create({ baseURL: process.env.HOST_API_KEY || '' });
const axiosInstance = axios.create({ baseURL: 'https://api.anypayinc.com/v1/api' || '' });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

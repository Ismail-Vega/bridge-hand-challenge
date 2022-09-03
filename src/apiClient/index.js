import axios from 'axios';

const TYPE = 'application/json';
const CONTENT_TYPE = 'Content-Type';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: TYPE,
    [CONTENT_TYPE]: TYPE,
  },
});

export default axiosClient;

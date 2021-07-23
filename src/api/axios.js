import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default API;

import axios from 'axios';
import { getToken } from './auth';

const port = process.env.REACT_APP_BACKEND_PORT;
const domain = process.env.REACT_APP_DOMAIN;
const baseUrl = `http://back.${domain}`;
const apiUrl = (port != null && port != 80) ? `${baseUrl}:${port}/api/v1` : `${baseUrl}/api/v1`;

const api = axios.create({
  baseURL: apiUrl,
})

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export default api;

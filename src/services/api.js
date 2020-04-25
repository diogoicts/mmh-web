import axios from 'axios';

const api = axios.create({
  baseURL: 'http://back.localhost',
})

export default api;

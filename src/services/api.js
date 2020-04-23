import axios from 'axios';

const api = axios.create({
  baseURL: 'http://back.localhost:8000',
})

export default api;

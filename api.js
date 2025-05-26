// frontend/src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://rsfpper-1-4g28.onrender.com/api/auth',  // Replace with your backend URL
  timeout: 10000,
});

export default API;

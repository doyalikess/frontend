// frontend/src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://rsfpper-1-4g28.onrender.com',  // Correct ngrok URL with ".app"
  timeout: 10000,
});

export default API;

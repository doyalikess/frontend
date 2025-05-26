// frontend/src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://343d-93-166-84-254.ngrok-free.app',  // Replace with your backend URL
  timeout: 10000,
});

export default API;

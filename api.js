// frontend/src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://0116-93-166-84-254.ngrok-free.app',  // Correct ngrok URL with ".app"
  timeout: 10000,
});

export default API;

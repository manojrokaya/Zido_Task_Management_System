import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Your backend API
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add Authorization Header if Token is Present
export const setAuthHeader = (token) => {
  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers['Authorization'];
  }
};

export default api;

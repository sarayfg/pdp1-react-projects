import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/search/?q=',
  headers: { Authorization: `Bearer ${API_KEY}` },
});
console.log(api);

export default api;
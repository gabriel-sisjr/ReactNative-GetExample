import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com'
    //baseURL: 'https://localhost:5001/api'
});

export default api;
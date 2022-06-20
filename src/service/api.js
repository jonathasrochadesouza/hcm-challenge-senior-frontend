import axios from  'axios';

//criação de componente para informar o axios onde está o nosso backend
const api = axios.create ({
    baseURL: process.env.API_URL
});

export default api;

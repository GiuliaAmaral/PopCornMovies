import axios from 'axios';


const API = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
})

export default API;
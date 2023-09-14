import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    }
});


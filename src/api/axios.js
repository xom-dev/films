import axios from 'axios';

const token = window.sessionStorage.getItem('token');

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    Authorization: `${token}`
  }
});

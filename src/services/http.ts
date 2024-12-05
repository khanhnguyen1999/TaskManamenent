import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:3001';

const http: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default http;


import axiosDefault, { AxiosInstance, AxiosRequestConfig } from 'axios';

const BASE_URL = 'http://localhost:3001/api';

export const axios: AxiosInstance = axiosDefault.create({
  baseURL: BASE_URL,
} as AxiosRequestConfig);

export const axiosPrivate: AxiosInstance = axiosDefault.create({
  baseURL: BASE_URL,
  withCredentials: true,
} as AxiosRequestConfig);

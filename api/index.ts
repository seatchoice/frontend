import axios, { AxiosRequestConfig } from "axios";

import { setInterceptors } from "./interceptor";

const defaultConfig: AxiosRequestConfig = {
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
};

const fileConfig = {
  ...defaultConfig,
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

const createAxiosInstance = (config: AxiosRequestConfig) => {
  const instance = axios.create(config);
  return setInterceptors(instance);
};

export const api = createAxiosInstance(defaultConfig);
export const fileApi = createAxiosInstance(fileConfig);

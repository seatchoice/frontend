import axios, { AxiosInstance, AxiosError } from "axios";

import { STORAGE } from "@/constants";

const getAccessToken = () => {
  return axios.get(`/api/auth/tokens`);
};

export const setInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem(STORAGE.ACCESS_TOKEN);
      config.headers["Authorization"] = `${accessToken}`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      const accessToken = response.headers.authorization;
      if (accessToken) {
        localStorage.setItem(STORAGE.ACCESS_TOKEN, accessToken);
      }
      return response;
    },
    async (error) => {
      try {
        const errorAPI = error.config;
        if (error.response.status === 401 && errorAPI && !errorAPI.retry) {
          localStorage.removeItem(STORAGE.ACCESS_TOKEN);
          errorAPI.retry = true;

          await getAccessToken();

          return instance(errorAPI);
        }
      } catch (err) {
        throw new AxiosError("Axios Interceptors Response ERROR");
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

import { AxiosInstance, AxiosError } from "axios";

import { STORAGE } from "@/constants";

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
        localStorage.setItem("ACCESS_TOKEN", accessToken);
      }
      return response;
    },
    async (error) => {
      try {
        const errorAPI = error.config;
        if (error.response.status === 401 && errorAPI && !errorAPI._retry) {
          localStorage.removeItem(STORAGE.ACCESS_TOKEN);

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

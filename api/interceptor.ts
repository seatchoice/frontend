import axios, { AxiosInstance, AxiosError } from "axios";

import { STORAGE } from "@/constants";
import { useAuth } from "@/domain/auth/hooks/useAuth";

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
        const { user, removeToken } = useAuth();
        const errorAPI = error.config;
        if (
          user &&
          error.response.status === 401 &&
          errorAPI &&
          !errorAPI.retry
        ) {
          removeToken();

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

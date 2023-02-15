import { AxiosInstance, AxiosError } from "axios";

import { STORAGE } from "@/constants";
import { useAccessTokenQuery } from "@/domain/login/hooks/query";

export const setInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem(STORAGE.ACCESS_TOKEN);
      config.headers["Authorization"] = `${accessToken}`;

      if (!accessToken) {
        /** FIXME: 백엔드 미구현이라 추후 수정 필요 */
        const {
          data: {
            data: { accessToken },
          },
        } = useAccessTokenQuery();
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      try {
        const errorAPI = error.config;

        if (error.response.status === 401 && errorAPI && !errorAPI._retry) {
          errorAPI._retry = true;

          const {
            data: {
              data: { accessToken },
            },
          } = useAccessTokenQuery();
          localStorage.setItem(STORAGE.ACCESS_TOKEN, accessToken);

          return instance(errorAPI);
        }
      } catch (err) {
        localStorage.removeItem(STORAGE.ACCESS_TOKEN);

        throw new AxiosError("Axios Interceptors Response ERROR");
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

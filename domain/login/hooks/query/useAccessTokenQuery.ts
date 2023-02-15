import { AxiosResponse, AxiosError } from "axios";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { api } from "@/api";
import { QUERY_KEYS, STORAGE } from "@/constants";

const getAccessToken = (): Promise<AxiosResponse<TokenResponse>> => {
  return api.get(`/reissue/refresh-token`);
};

export const useAccessTokenQuery = (
  options?: UseQueryOptions<TokenResponse, AxiosError, TokenResponse, string[]>
) => {
  return useQuery(
    [QUERY_KEYS.ACCESS_TOKEN],
    async () => {
      const { data } = await getAccessToken();
      return data;
    },
    {
      ...options,
      onSuccess: ({ data }) => {
        const { accessToken } = data;
        localStorage.setItem(STORAGE.ACCESS_TOKEN, accessToken);
      },
      onError: () => {
        localStorage.removeItem(STORAGE.ACCESS_TOKEN);
        throw new AxiosError("access 토큰이 만료되었습니다.");
      },
    }
  );
};

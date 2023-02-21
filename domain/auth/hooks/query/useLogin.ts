import { AxiosResponse, AxiosError } from "axios";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

import { api } from "@/api";
import { STORAGE } from "@/constants";

const login = (authCode: string): Promise<AxiosResponse<TokenResponse>> => {
  return api.post(`oauth/kakao/login?code=${authCode}`);
};

export const useLogin = (
  options?: UseMutationOptions<AxiosResponse<TokenResponse>, AxiosError, string>
) => {
  return useMutation((authCode) => login(authCode), {
    ...options,
    onSuccess: (res) => {
      const accessToken = res.headers.authorization;
      localStorage.setItem(STORAGE.ACCESS_TOKEN, accessToken);
    },
  });
};

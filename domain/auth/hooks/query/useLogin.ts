import { AxiosResponse, AxiosError } from "axios";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { api } from "@/api";
import { useAuth } from "../useAuth";

const login = (authCode: string): Promise<AxiosResponse<TokenResponse>> => {
  return api.post(`oauth/kakao/login?code=${authCode}`);
};

export const useLogin = (
  options?: UseMutationOptions<AxiosResponse<TokenResponse>, AxiosError, string>
) => {
  const router = useRouter();
  const { setToken } = useAuth();
  return useMutation((authCode) => login(authCode), {
    ...options,
    onSuccess: (res) => {
      const accessToken = res.headers.authorization;
      setToken(accessToken);

      router.push("/");
    },
  });
};

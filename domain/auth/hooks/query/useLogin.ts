import { AxiosResponse, AxiosError } from "axios";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { api } from "@/api";
import { useAuth } from "../useAuth";

const login = (authCode: string): Promise<AxiosResponse<LoginResponse>> => {
  return api.post(`oauth/kakao/login?code=${authCode}`);
};

export const useLogin = (
  options?: UseMutationOptions<AxiosResponse<LoginResponse>, AxiosError, string>
) => {
  const router = useRouter();
  const { setUser } = useAuth();
  return useMutation((authCode) => login(authCode), {
    ...options,
    onSuccess: (res) => {
      const accessToken = res.headers.authorization;
      const { nickname } = res.data;

      setUser(accessToken, nickname);

      router.push("/");
    },
  });
};

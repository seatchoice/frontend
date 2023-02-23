import { AxiosResponse, AxiosError } from "axios";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

import { api } from "@/api";
import { useAuth } from "../useAuth";

const logout = (): Promise<AxiosResponse> => {
  return api.post(`oauth/kakao/logout`);
};

export const useLogout = (
  options?: UseMutationOptions<AxiosResponse, AxiosError<ErrorResponse>>
) => {
  const { removeToken } = useAuth();
  return useMutation(logout, {
    ...options,
    onSuccess: () => {
      removeToken();
    },
    onError: ({ response }) => {
      if (response?.data.errorCode === "EMPTY_TOKEN") {
        removeToken();
      }
    },
  });
};

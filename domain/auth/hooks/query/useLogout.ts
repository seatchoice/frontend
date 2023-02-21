import { AxiosResponse, AxiosError } from "axios";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

import { api } from "@/api";
import { STORAGE } from "@/constants";

const logout = (): Promise<AxiosResponse> => {
  return api.post(`oauth/kakao/logout`);
};

export const useLogout = (
  options?: UseMutationOptions<AxiosResponse, AxiosError>
) => {
  return useMutation(logout, {
    ...options,
    onSuccess: () => {
      localStorage.removeItem(STORAGE.ACCESS_TOKEN);
    },
  });
};

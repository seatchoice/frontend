import { AxiosResponse, AxiosError } from "axios";
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { api } from "@/api";
import { QUERY_KEYS } from "@/constants/queryKey";

const readAllNotification = (): Promise<AxiosResponse> => {
  return api.post(`/alarms/read-all`);
};

export const useReadAllMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError>
) => {
  const queryClient = useQueryClient();
  return useMutation(readAllNotification, {
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.NOTIFICATION_LIST]);
    },
  });
};

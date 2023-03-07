import { AxiosResponse, AxiosError } from "axios";
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { api } from "@/api";
import { QUERY_KEYS } from "@/constants/queryKey";

const readNotification = (alarmId: number): Promise<AxiosResponse> => {
  return api.post(`/alarms/${alarmId}`);
};

export const useReadMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, number>
) => {
  const queryClient = useQueryClient();
  return useMutation((notificationId) => readNotification(notificationId), {
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.NOTIFICATION_LIST]);
    },
  });
};

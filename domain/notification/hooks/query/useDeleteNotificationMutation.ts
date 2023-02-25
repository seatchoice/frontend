import { AxiosResponse, AxiosError } from "axios";
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { api } from "@/api";
import { QUERY_KEYS } from "@/constants/queryKey";
import { useToast } from "@/hooks/useToast";

const deleteNotification = (alarmId: number): Promise<AxiosResponse> => {
  return api.delete(`/alarms/${alarmId}`);
};

export const useDeleteNotificationMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError<ErrorResponse>, number>
) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation((notificationId) => deleteNotification(notificationId), {
    ...options,
    onSuccess: () => {
      toast({ type: "success", content: "알림이 삭제되었습니다." });
      queryClient.invalidateQueries([QUERY_KEYS.NOTIFICATION_LIST]);
    },
  });
};

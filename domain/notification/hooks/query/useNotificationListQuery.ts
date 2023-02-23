import { AxiosResponse, AxiosError } from "axios";
import { UseQueryOptions, useInfiniteQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants";

import { api } from "@/api";

type NotificationListResponse = Pagination & {
  content: Array<_Notification>;
};

const getNotificationList = (): Promise<
  AxiosResponse<NotificationListResponse>
> => {
  return api.get(`/alarms/list`);
};

export const useNotificationListQuery = (
  options?: UseQueryOptions<
    NotificationListResponse,
    AxiosError,
    NotificationListResponse,
    string[]
  >
) => {
  return useInfiniteQuery(
    [QUERY_KEYS.NOTIFICATION_LIST],
    async ({ queryKey }) => {
      const { data } = await getNotificationList();
      return data;
    },
    {
      getNextPageParam: ({ last, number }) => (last ? undefined : number + 1),
    }
  );
};

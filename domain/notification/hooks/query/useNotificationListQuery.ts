import { AxiosResponse, AxiosError } from "axios";
import { UseQueryOptions, useInfiniteQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants";

import { api } from "@/api";

type NotificationListResponse = Pagination & {
  content: Array<_Notification>;
};

const getNotificationList = (
  page: number,
  size: number
): Promise<AxiosResponse<NotificationListResponse>> => {
  return api.get(`/alarms/list?page=${page}&size=${size}`);
};

export const useNotificationListQuery = (size = 10) => {
  return useInfiniteQuery(
    [QUERY_KEYS.NOTIFICATION_LIST],
    async ({ queryKey, pageParam }) => {
      const { data } = await getNotificationList(pageParam ?? 0, size);
      return data;
    },
    {
      getNextPageParam: ({ last, number }) => (last ? undefined : number + 1),
    }
  );
};

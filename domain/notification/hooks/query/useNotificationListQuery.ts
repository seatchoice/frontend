import { AxiosResponse, AxiosError } from "axios";
import { UseQueryOptions, useInfiniteQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants";

import { api } from "@/api";

type NotificationListResponse = Pagination & {
  content: Array<_Notification>;
};

const getNotificationList = (
  size: number,
  lastAlarmId?: number
): Promise<AxiosResponse<NotificationListResponse>> => {
  return api.get(
    `/alarms/list?size=${size}${
      lastAlarmId ? `&lastAlarmId=${lastAlarmId}` : ""
    }`
  );
};

export const useNotificationListQuery = (size = 10) => {
  return useInfiniteQuery(
    [QUERY_KEYS.NOTIFICATION_LIST],
    async ({ queryKey, pageParam }) => {
      const { data } = await getNotificationList(size, pageParam ?? 0);
      return data;
    },
    {
      getNextPageParam: ({ last, content }) =>
        last ? undefined : content ? content.at(-1)?.id : "",
    }
  );
};

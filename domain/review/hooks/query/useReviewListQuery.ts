import { AxiosResponse } from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants";

import { api } from "@/api";

type ReviewListResponse = Pagination & {
  content: Array<ReviewWithThumbnail>;
};

const getReviewList = (
  seatId: string,
  size: number,
  lastReviewId?: number
): Promise<AxiosResponse<ReviewListResponse>> => {
  return api.get(
    `/reviews?seatId=${seatId}&size=${size}&lastReviewId=${lastReviewId}`
  );
};

export const useReviewListQuery = (seatId: string, size = 2) => {
  return useInfiniteQuery(
    [QUERY_KEYS.REVIEW_LIST, seatId],
    async ({ queryKey: [, seatId], pageParam }) => {
      const { data } = await getReviewList(seatId, size, pageParam ?? "");
      return data;
    },
    {
      getNextPageParam: ({ last, content }) =>
        last ? undefined : content ? content.at(-1)?.reviewId : "",
    }
  );
};

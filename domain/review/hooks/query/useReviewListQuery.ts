import { AxiosResponse } from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants";

import { api } from "@/api";

type ReviewListResponse = {
  content: Array<ReviewWithThumbnail>;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
};

const getReviewList = (
  seatId: string,
  page: number,
  size: number
): Promise<AxiosResponse<ReviewListResponse>> => {
  return api.get(`/reviews?seatId=${seatId}&page=${page}&size=${size}`);
};

export const useReviewListQuery = (seatId: string, size = 2) => {
  return useInfiniteQuery(
    [QUERY_KEYS.REVIEW_LIST, seatId],
    async ({ queryKey: [, seatId], pageParam = 0 }) => {
      const { data } = await getReviewList(seatId, pageParam, size);
      return data;
    },
    {
      getNextPageParam: ({ last, number }) => (last ? undefined : number + 1),
    }
  );
};

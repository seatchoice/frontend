import { AxiosResponse, AxiosError } from "axios";
import { UseQueryOptions } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants";
import { useSuspenseQuery } from "@/hooks/useSuspenseQuery";
import { api } from "@/api";

type ReviewImageListResponse = Array<{ reviewId: number; imageUrl: string }>;

const getReviewImageList = (
  seatId: string
): Promise<AxiosResponse<ReviewImageListResponse>> => {
  return api.get(`/images?seatId=${seatId}`);
};

export const useReviewImageListQuery = (
  seatId: string,
  options?: UseQueryOptions<
    ReviewImageListResponse,
    AxiosError,
    ReviewImageListResponse,
    string[]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.REVIEW_IMAGE_LIST, seatId],
    async ({ queryKey: [, seatId] }) => {
      const { data } = await getReviewImageList(seatId);
      return data;
    },
    {
      ...options,
    }
  );
};

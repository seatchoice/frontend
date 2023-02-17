import { AxiosResponse, AxiosError } from "axios";
import { UseQueryOptions } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants";
import { useSuspenseQuery } from "@/hooks/useSuspenseQuery";
import { api } from "@/api";

type ReviewResponse = {
  data: {
    userId: number;
    nickname: string;
    createdAt: string;
    floor: number;
    section: string;
    seatRow: number;
    seatNumber: number;
    rating: number;
    content: string;
    images: Array<string>;
    likeAmount: number;
    likeChecked: boolean;
  };
};

const getReview = (
  reviewId: string
): Promise<AxiosResponse<ReviewResponse>> => {
  return api.get(`reviews/${reviewId}`);
};

export const useReviewQuery = (
  reviewId: string,
  options?: UseQueryOptions<
    ReviewResponse,
    AxiosError,
    ReviewResponse,
    string[]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.REVIEW, reviewId],
    async ({ queryKey: [, reviewId] }) => {
      const { data } = await getReview(reviewId);
      return data;
    },
    {
      ...options,
    }
  );
};

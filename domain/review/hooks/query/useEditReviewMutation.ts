import { AxiosResponse, AxiosError } from "axios";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { fileApi } from "@/api";

type ReviewRequest = {
  reviewId: string;
  payload: FormData;
};

type ReviewResponse = Review;

const editReview = ({
  reviewId,
  payload,
}: ReviewRequest): Promise<AxiosResponse<ReviewResponse>> => {
  return fileApi.post(`/reviews/${reviewId}`, payload);
};

export const useEditReviewMutation = (
  options?: UseMutationOptions<
    AxiosResponse<ReviewResponse>,
    AxiosError,
    ReviewRequest
  >
) => {
  const router = useRouter();
  return useMutation(
    ({ reviewId, payload }) => editReview({ reviewId, payload }),
    {
      ...options,
      onSuccess: () => {
        router.back();
      },
    }
  );
};

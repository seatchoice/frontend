import { AxiosResponse, AxiosError } from "axios";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

import { fileApi } from "@/api";
import { useRouter } from "next/router";

type ReviewRequest = {
  theaterId: string;
  payload: FormData;
};

type ReviewResponse = Review;

const createReview = ({
  theaterId,
  payload,
}: ReviewRequest): Promise<AxiosResponse<ReviewResponse>> => {
  return fileApi.post(`theaters/${theaterId}/reviews`, payload);
};

export const useCreateReviewMutation = (
  options?: UseMutationOptions<
    AxiosResponse<ReviewResponse>,
    AxiosError,
    ReviewRequest
  >
) => {
  const router = useRouter();
  const { theater, name } = router.query;
  return useMutation(
    ({ theaterId, payload }) => createReview({ theaterId, payload }),
    {
      ...options,
      onSuccess: () => {
        router.push(`/${theater}?name=${name}`);
      },
    }
  );
};

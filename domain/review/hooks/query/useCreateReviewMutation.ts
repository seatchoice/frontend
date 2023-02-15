import { AxiosResponse, AxiosError } from "axios";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

import { fileApi } from "@/api";

type ReviewRequest = {
  theaterId: string;
  payload: FormData;
};

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
  return useMutation(
    ({ theaterId, payload }) => createReview({ theaterId, payload }),
    {
      ...options,
    }
  );
};

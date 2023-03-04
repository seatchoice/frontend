import { AxiosResponse, AxiosError } from "axios";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

import { api } from "@/api";
import { useRouter } from "next/router";

const deleteReview = (reviewId: string): Promise<AxiosResponse> => {
  return api.delete(`/reviews/${reviewId}`);
};

export const useDeleteReviewMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, string>
) => {
  const router = useRouter();
  return useMutation((reviewId) => deleteReview(reviewId), {
    ...options,
    onSuccess: () => {
      router.back();
    },
  });
};

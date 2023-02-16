import { AxiosResponse, AxiosError } from "axios";
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { api } from "@/api";
import { QUERY_KEYS } from "@/constants/queryKey";

const deleteReviewLike = (reviewId: string): Promise<AxiosResponse> => {
  return api.delete(`/likes?reviewId=${reviewId}`);
};

export const useDeleteReviewLikeMutation = (
  reviewId: string,
  options?: UseMutationOptions<AxiosResponse, AxiosError, string>
) => {
  const queryClient = useQueryClient();
  return useMutation(() => deleteReviewLike(reviewId), {
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.REVIEW, reviewId]);
    },
  });
};

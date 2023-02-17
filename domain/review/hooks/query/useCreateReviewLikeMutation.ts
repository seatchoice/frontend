import { AxiosResponse, AxiosError } from "axios";
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { api } from "@/api";
import { QUERY_KEYS } from "@/constants/queryKey";

const createReviewLike = (reviewId: string): Promise<AxiosResponse> => {
  return api.post(`/likes?reviewId=${reviewId}`);
};

export const useCreateReviewLikeMutation = (
  reviewId: string,
  options?: UseMutationOptions<AxiosResponse, AxiosError, string>
) => {
  const queryClient = useQueryClient();
  return useMutation(() => createReviewLike(reviewId), {
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.REVIEW, reviewId]);
    },
  });
};

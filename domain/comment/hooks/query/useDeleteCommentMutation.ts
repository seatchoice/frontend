import { AxiosResponse, AxiosError } from "axios";
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { api } from "@/api";
import { QUERY_KEYS } from "@/constants/queryKey";

const deleteComment = (commentId: number): Promise<AxiosResponse> => {
  return api.delete(`/comment/${commentId}`);
};

export const useDeleteCommentMutation = (
  reviewId: string,
  options?: UseMutationOptions<AxiosResponse, AxiosError, number>
) => {
  const queryClient = useQueryClient();
  return useMutation((commentId) => deleteComment(commentId), {
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.COMMENT_LIST, reviewId]);
    },
  });
};

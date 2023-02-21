import { AxiosResponse, AxiosError } from "axios";
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { api } from "@/api";
import { QUERY_KEYS } from "@/constants/queryKey";

type CommentRequest = {
  reviewId: number;
  content: string;
};

const createComment = (payload: CommentRequest): Promise<AxiosResponse> => {
  return api.post(`/comments`, payload);
};

export const useCreateCommentMutation = (
  reviewId: string,
  options?: UseMutationOptions<
    AxiosResponse,
    AxiosError,
    Omit<CommentRequest, "reviewId">
  >
) => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ content }) => createComment({ reviewId: +reviewId, content }),
    {
      ...options,
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.COMMENT_LIST, reviewId]);
      },
    }
  );
};

import { AxiosResponse, AxiosError } from "axios";
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { api } from "@/api";
import { QUERY_KEYS } from "@/constants/queryKey";
import { useToast } from "@/hooks/useToast";

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
    AxiosError<ErrorResponse>,
    Omit<CommentRequest, "reviewId">
  >
) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation(
    ({ content }) => createComment({ reviewId: +reviewId, content }),
    {
      ...options,
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.COMMENT_LIST, reviewId]);
      },
      onError: ({ response }) => {
        if (response?.data.errorCode === "METHOD_ARGUMENT_NOT_VALID") {
          toast({ type: "error", content: response.data.errorMessage });
        }
      },
    }
  );
};

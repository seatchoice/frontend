import { AxiosResponse, AxiosError } from "axios";
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { api } from "@/api";
import { QUERY_KEYS } from "@/constants/queryKey";

type CommentEditRequest = {
  commentId: number;
  content: string;
};

const editComment = ({
  commentId,
  content,
}: CommentEditRequest): Promise<AxiosResponse> => {
  return api.put(`/comment/${commentId}`, content);
};

export const useEditCommentMutation = (
  reviewId: string,
  options?: UseMutationOptions<AxiosResponse, AxiosError, CommentEditRequest>
) => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ commentId, content }) => editComment({ commentId, content }),
    {
      ...options,
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.COMMENT_LIST, reviewId]);
      },
    }
  );
};

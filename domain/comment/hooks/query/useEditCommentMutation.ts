import { AxiosResponse, AxiosError } from "axios";
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { api } from "@/api";
import { QUERY_KEYS } from "@/constants/queryKey";
import { useToast } from "@/hooks/useToast";

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
  const { toast } = useToast();
  return useMutation(
    ({ commentId, content }) => editComment({ commentId, content }),
    {
      ...options,
      onSuccess: () => {
        toast({ type: "success", content: "댓글이 수정되었습니다." });
        queryClient.invalidateQueries([QUERY_KEYS.COMMENT_LIST, reviewId]);
      },
    }
  );
};

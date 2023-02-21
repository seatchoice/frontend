import { AxiosResponse, AxiosError } from "axios";
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { api } from "@/api";
import { QUERY_KEYS } from "@/constants/queryKey";
import { useToast } from "@/hooks/useToast";

const deleteComment = (commentId: number): Promise<AxiosResponse> => {
  return api.delete(`/comments/${commentId}`);
};

export const useDeleteCommentMutation = (
  reviewId: string,
  options?: UseMutationOptions<AxiosResponse, AxiosError<ErrorResponse>, number>
) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation((commentId) => deleteComment(commentId), {
    ...options,
    onSuccess: () => {
      toast({ type: "success", content: "댓글이 삭제되었습니다." });
      queryClient.invalidateQueries([QUERY_KEYS.COMMENT_LIST, reviewId]);
    },
  });
};

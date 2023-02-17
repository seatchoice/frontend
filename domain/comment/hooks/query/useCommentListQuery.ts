import { AxiosResponse, AxiosError } from "axios";
import { UseQueryOptions } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants";
import { useSuspenseQuery } from "@/hooks/useSuspenseQuery";

import { api } from "@/api";

type CommentListResponse = {
  data: Array<_Comment>;
};

const getCommentList = (
  reviewId: string
): Promise<AxiosResponse<CommentListResponse>> => {
  return api.get(`/review/${reviewId}/comments`);
};

export const useCommentListQuery = (
  reviewId: string,
  options?: UseQueryOptions<
    CommentListResponse,
    AxiosError,
    CommentListResponse,
    string[]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.COMMENT_LIST, reviewId],
    async ({ queryKey: [, reviewId] }) => {
      const { data } = await getCommentList(reviewId);
      return data;
    },
    {
      ...options,
    }
  );
};

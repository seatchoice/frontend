import { useNextRouter } from "@/hooks/useNextRouter";
import { Comment } from "../Comment";
import {
  useCommentListQuery,
} from "../../hooks/query";

export function CommentList() {
  const {
    query: { reviewId },
  } = useNextRouter();

  const { data: commentList } = useCommentListQuery(reviewId as string);

  return (
    <>
      {commentList.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
}

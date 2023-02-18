import { useNextRouter } from "@/hooks/useNextRouter";
import { Button } from "@/components";
import { Comment } from "../Comment";
import {
  useCommentListQuery,
  useDeleteCommentMutation,
} from "../../hooks/query";

export function CommentList() {
  const {
    query: { reviewId },
  } = useNextRouter();

  const { data: commentList } = useCommentListQuery(reviewId as string);

  const { mutate: deleteComment } = useDeleteCommentMutation(
    reviewId as string
  );
  const handleDeleteButtonClick = (commentId: number) => {
    deleteComment(commentId);
  };

  return (
    <>
      {commentList.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          deleteButton={
            <Button
              onClick={() => handleDeleteButtonClick(comment.id)}
              className="bg-transparent dark:bg-transparent"
            >
              삭제
            </Button>
          }
        />
      ))}
    </>
  );
}

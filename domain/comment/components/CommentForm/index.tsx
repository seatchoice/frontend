import { useRef, Dispatch, SetStateAction } from "react";
import { useNextRouter } from "@/hooks/useNextRouter";
import { Button, Textarea } from "@/components";
import {
  useCreateCommentMutation,
  useEditCommentMutation,
} from "../../hooks/query";

type CommentFormProps = {
  comment?: _Comment;
  setIsEditMode?: Dispatch<SetStateAction<boolean>>;
};

export function CommentForm({ comment, setIsEditMode }: CommentFormProps) {
  const {
    query: { reviewId },
  } = useNextRouter();

  const isEditMode = !!comment;
  const { id: commentId, content } = comment ?? {};

  const commentRef = useRef<HTMLTextAreaElement>(null);

  const { mutate: createComment } = useCreateCommentMutation(
    reviewId as string
  );
  const { mutate: editComment } = useEditCommentMutation(reviewId as string);
  const handleCommentSubmit = (
    e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }
  ) => {
    e.preventDefault();

    const commentContent = commentRef.current?.value;
    if (isEditMode) {
      editComment({
        commentId,
        content: commentContent,
      });
      setIsEditMode(false);
    } else {
      createComment({
        reviewId: +(reviewId as string),
        content: commentContent,
      });
    }
    e.target.reset();
  };

  return (
    <form onSubmit={handleCommentSubmit}>
      <div className="rounded-lg">
        <label htmlFor="comment" className="sr-only">
          {isEditMode ? "댓글 수정하기" : "댓글 작성하기"}
        </label>
        <Textarea
          ref={commentRef}
          id="comment"
          required
          placeholder="댓글을 작성해주세요."
          rows={6}
          className="w-full"
          defaultValue={content}
        ></Textarea>
      </div>
      <Button>{isEditMode ? "댓글 수정하기" : "댓글 작성하기"}</Button>
    </form>
  );
}

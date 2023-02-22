import { useRef } from "react";
import { Button, Textarea } from "@/components";

type CommentFormProps = {
  comment?: _Comment;
  onSubmit: ({
    commentId,
    content,
  }: {
    commentId: number;
    content: string;
  }) => void;
};

export function CommentForm({ comment, onSubmit }: CommentFormProps) {
  const { id: commentId, content } = comment ?? {};

  const commentRef = useRef<HTMLTextAreaElement>(null);

  const handleCommentSubmit = (
    e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }
  ) => {
    e.preventDefault();

    const commentContent = commentRef.current?.value;
    onSubmit({ commentId: commentId ?? 0, content: commentContent ?? "" });

    e.target.reset();
  };

  return (
    <form onSubmit={handleCommentSubmit}>
      <div className="rounded-lg">
        <label htmlFor="comment" className="sr-only">
          댓글 작성하기
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
      <Button>댓글 작성하기</Button>
    </form>
  );
}

import { useRef } from "react";
import { useNextRouter } from "@/hooks/useNextRouter";
import { Button, Textarea } from "@/components";
import { useCreateCommentMutation } from "../../hooks/query";

type CommentFormProps<T extends React.ElementType> = Component<T> & {};

export function CommentForm({
  className,
  children,
  ...props
}: CommentFormProps<"form">) {
  const {
    query: { reviewId },
  } = useNextRouter();
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const { mutate: createComment } = useCreateCommentMutation(
    reviewId as string
  );

  const handleCommentSubmit = (
    e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }
  ) => {
    e.preventDefault();

    const comment = commentRef.current?.value;
    if (comment) {
      createComment({ content: comment, reviewId: +(reviewId as string) });
      e.target.reset();
    }
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
        ></Textarea>
      </div>
      <Button>댓글 작성하기</Button>
    </form>
  );
}

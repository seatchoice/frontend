import { Button, Textarea } from "@/components";
import { tw } from "@/utils/tailwindMerge";

type CommentFormProps<T extends React.ElementType> = Component<T> & {};

export function CommentForm({
  className,
  children,
  ...props
}: CommentFormProps<"form">) {
  return (
    <form className={tw("", className)} {...props}>
      <div className="rounded-lg">
        <label htmlFor="comment" className="sr-only">
          댓글 작성하기
        </label>
        <Textarea
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

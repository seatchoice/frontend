import Image from "next/image";
import { useState } from "react";

import { Button, LikeButton, Text } from "@/components";
import { CommentForm } from "../CommentForm";
import { useEditCommentMutation } from "../../hooks/query";
import { useNextRouter } from "@/hooks/useNextRouter";

type CommentProps<T extends React.ElementType> = Component<T> & {
  comment: _Comment;
  deleteButton: React.ReactNode;
};

export function Comment({
  comment,
  deleteButton,
  className,
  children,
  ...props
}: CommentProps<"article">) {
  const {
    query: { reviewId },
  } = useNextRouter();
  const { nickname, content, updatedAt, likeAmount } = comment;

  const [isEditMode, setIsEditMode] = useState(false);

  const { mutate: editComment } = useEditCommentMutation(reviewId as string);

  return (
    <article className="rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <Image
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt="프로필 사진"
            width={24}
            height={24}
            className="w-6 h-6 rounded-full"
          />
          <span>{nickname}</span>
          <Text className="text-sm text-gray-500">
            <time dateTime={updatedAt} title={updatedAt}>
              {updatedAt}
            </time>
          </Text>
        </div>
        <ul className="flex">
          <li>
            <Button
              onClick={() => setIsEditMode(true)}
              className="bg-transparent dark:bg-transparent"
            >
              편집
            </Button>
          </li>
          <li>{deleteButton}</li>
        </ul>
      </div>
      <Text>{content}</Text>
      <footer className="flex items-center mt-4 space-x-4">
        <LikeButton className="text-sm">{likeAmount}</LikeButton>
      </footer>
      {isEditMode && <CommentForm comment={comment} onSubmit={editComment} />}
    </article>
  );
}

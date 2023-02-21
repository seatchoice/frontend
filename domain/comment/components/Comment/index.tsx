import { useState } from "react";

import { useNextRouter } from "@/hooks/useNextRouter";
import { Button, LikeButton, Text, Profile } from "@/components";
import { CommentForm } from "../CommentForm";
import {
  useDeleteCommentMutation,
  useEditCommentMutation,
} from "../../hooks/query";
import { getDateDiffTextFromNow } from "@/utils/date";

type CommentProps = {
  comment: _Comment;
};

export function Comment({ comment }: CommentProps) {
  const {
    query: { reviewId },
  } = useNextRouter();
  const { id, nickname, content, updatedAt, likeAmount } = comment;

  const [isEditMode, setIsEditMode] = useState(false);

  const { mutate: editComment } = useEditCommentMutation(reviewId as string);
  const { mutate: deleteComment } = useDeleteCommentMutation(
    reviewId as string
  );

  const handleDeleteButtonClick = () => {
    deleteComment(id);
  };

  return (
    <article className="rounded-lg">
      <header className="flex justify-between items-center mb-2">
        <Profile
          nickname={nickname}
          updatedAt={`${getDateDiffTextFromNow(updatedAt)} 전`}
        />
        <ul className="flex">
          <li>
            <Button
              onClick={() => setIsEditMode(true)}
              className="bg-transparent dark:bg-transparent"
            >
              편집
            </Button>
          </li>
          <li>
            <Button
              onClick={handleDeleteButtonClick}
              className="bg-transparent dark:bg-transparent"
            >
              삭제
            </Button>
          </li>
        </ul>
      </header>
      <Text>{content}</Text>
      <LikeButton className="mt-4 text-sm">{likeAmount}</LikeButton>
      {isEditMode && <CommentForm comment={comment} onSubmit={editComment} />}
    </article>
  );
}

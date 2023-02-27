import { useState } from "react";

import { useNextRouter } from "@/hooks/useNextRouter";
import { Button, Text, Profile } from "@/components";
import { getDateDiffTextFromNow } from "@/utils/date";
import { useAuth } from "@/domain/auth/hooks/useAuth";
import { CommentForm } from "../CommentForm";
import {
  useDeleteCommentMutation,
  useEditCommentMutation,
} from "../../hooks/query";

type CommentProps = {
  comment: _Comment;
};

export function Comment({ comment }: CommentProps) {
  const {
    query: { reviewId },
  } = useNextRouter();
  const { user } = useAuth();
  const { id, nickname, content, updatedAt, userId } = comment;

  const [isEditMode, setIsEditMode] = useState(false);

  const { mutate: editComment } = useEditCommentMutation(reviewId as string);
  const { mutate: deleteComment } = useDeleteCommentMutation(
    reviewId as string
  );

  const handleDeleteButtonClick = () => {
    deleteComment(id);
  };

  return (
    <article className="rounded-lg mb-2">
      <header className="flex justify-between items-center mb-2 py-2">
        <Profile
          nickname={nickname}
          updatedAt={`${getDateDiffTextFromNow(updatedAt)} 전`}
        />
        {user?.userId === String(userId) && (
          <ul className="flex gap-4">
            <li>
              <Button as="icon" onClick={() => setIsEditMode(true)}>
                편집
              </Button>
            </li>
            <li>
              <Button as="icon" onClick={handleDeleteButtonClick}>
                삭제
              </Button>
            </li>
          </ul>
        )}
      </header>
      <Text className="py-2">{content}</Text>
      {isEditMode && <CommentForm comment={comment} onSubmit={editComment} />}
    </article>
  );
}

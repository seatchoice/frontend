import Link from "next/link";
import { useNextRouter } from "@/hooks/useNextRouter";
import { Profile, Button } from "@/components";
import { getDateDiffTextFromNow } from "@/utils/date";
import { useAuth } from "@/domain/auth/hooks/useAuth";
import { useDeleteReviewMutation } from "../../hooks/query";

type ReviewerProps<T extends React.ElementType> = Component<T> & {
  nickname: string;
  createdAt: string;
  userId: number;
};

export function Reviewer({
  nickname,
  createdAt,
  userId,
}: ReviewerProps<"section">) {
  const { user } = useAuth();
  const {
    query: { theater, reviewId },
  } = useNextRouter();

  const { mutate: deleteReview } = useDeleteReviewMutation();

  const handleDeleteButtonClick = () => {
    const isConfirmed = confirm("정말 삭제하시겠습니까?");
    if (isConfirmed) deleteReview(reviewId as string);
  };

  return (
    <section className="flex gap-4">
      <Profile
        nickname={nickname}
        updatedAt={`${getDateDiffTextFromNow(createdAt)} 전`}
      />
      {user?.userId === String(userId) && (
        <>
          <Link href={`/${theater}/post/${reviewId}/edit`}>편집</Link>
          <Button as="icon" onClick={handleDeleteButtonClick}>
            삭제
          </Button>
        </>
      )}
    </section>
  );
}

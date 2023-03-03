import { useNextRouter } from "@/hooks/useNextRouter";
import { Text, Divider, BackButton, MainHeader } from "@/components";
import { ReviewForm } from "@/domain/review/components";
import {
  useEditReviewMutation,
  useReviewQuery,
} from "@/domain/review/hooks/query";
import { useAuth } from "@/domain/auth/hooks/useAuth";
import { LoginRequired } from "@/domain/auth/components";

export default function ReviewEdit() {
  const {
    query: { theater, reviewId },
  } = useNextRouter();

  const { data } = useReviewQuery(reviewId as string);
  const { mutate: editReview } = useEditReviewMutation();

  const { user } = useAuth();
  if (!user) return <LoginRequired />;

  return (
    <>
      <MainHeader />
      <header className="flex items-center py-2">
        <BackButton />
        <Text as="h3">리뷰 수정하기</Text>
      </header>
      <Divider className="my-2" />
      <Text as="h4" className="mb-2">
        {theater}
      </Text>
      <ReviewForm data={data} onMutate={editReview} />
    </>
  );
}

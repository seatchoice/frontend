import { useNextRouter } from "@/hooks/useNextRouter";
import { Text, Divider, MainHeader, Container } from "@/components";
import { ReviewForm, ReviewPostHeader } from "@/domain/review/components";
import {
  useEditReviewMutation,
  useReviewQuery,
} from "@/domain/review/hooks/query";
import { useAuth } from "@/domain/auth/hooks/useAuth";
import { LoginRequired } from "@/domain/auth/components";

export default function ReviewEdit() {
  const {
    query: { name: theaterName, reviewId },
  } = useNextRouter();

  const { data } = useReviewQuery(reviewId as string);
  const { mutate: editReview } = useEditReviewMutation();

  const { user } = useAuth();
  if (!user) return <LoginRequired />;

  return (
    <>
      <MainHeader />
      <ReviewPostHeader>리뷰 수정하기</ReviewPostHeader>
      <Divider className="my-2" />
      <Container>
        <Text as="h4" className="py-4">
          {theaterName}
        </Text>
        <ReviewForm data={data} onMutate={editReview} />
      </Container>
    </>
  );
}

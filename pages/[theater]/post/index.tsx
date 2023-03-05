import { useNextRouter } from "@/hooks/useNextRouter";
import { Text, Divider, MainHeader, Container } from "@/components";
import { ReviewForm, ReviewPostHeader } from "@/domain/review/components";
import { LoginRequired } from "@/domain/auth/components";
import { useAuth } from "@/domain/auth/hooks/useAuth";
import { useCreateReviewMutation } from "@/domain/review/hooks/query";

export default function ReviewPost() {
  const {
    query: { theaterName },
  } = useNextRouter();

  const { mutate: createReview } = useCreateReviewMutation();

  const { user } = useAuth();
  if (!user) return <LoginRequired />;

  return (
    <>
      <MainHeader />
      <ReviewPostHeader>리뷰 작성하기</ReviewPostHeader>
      <Divider className="my-2" />
      <Container>
        <Text as="h4" className="py-4">
          {theaterName}
        </Text>
        <ReviewForm onMutate={createReview} />
      </Container>
    </>
  );
}

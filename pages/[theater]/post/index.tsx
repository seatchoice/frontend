import { useNextRouter } from "@/hooks/useNextRouter";
import { Text, Divider, BackButton, MainHeader } from "@/components";
import { ReviewForm } from "@/domain/review/components";
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
      <header className="flex items-center py-2">
        <BackButton />
        <Text as="h3">리뷰 작성하기</Text>
      </header>
      <Divider className="my-2" />
      <Text as="h4" className="py-4">
        {theaterName}
      </Text>
      <ReviewForm onMutate={createReview} />
    </>
  );
}

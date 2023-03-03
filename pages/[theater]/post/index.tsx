import { Text, Divider, BackButton } from "@/components";
import { ReviewForm } from "@/domain/review/components";
import { useCreateReviewMutation } from "@/domain/review/hooks/query";
import { useNextRouter } from "@/hooks/useNextRouter";
import { useAuth } from "@/domain/auth/hooks/useAuth";
import { LoginRequired } from "@/domain/auth/components";

export default function ReviewPost() {
  const {
    query: { theater },
  } = useNextRouter();

  const { mutate: createReview } = useCreateReviewMutation();

  const { user } = useAuth();
  if (!user) return <LoginRequired />;

  return (
    <>
      <header className="flex items-center py-2">
        <BackButton />
        <Text as="h3">리뷰 작성하기</Text>
      </header>
      <Divider className="my-2" />
      <Text as="h4" className="mb-2">
        {theater}
      </Text>
      <ReviewForm onMutate={createReview} />
    </>
  );
}

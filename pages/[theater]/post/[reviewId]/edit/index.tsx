import { useNextRouter } from "@/hooks/useNextRouter";
import { Text, Divider, BackButton } from "@/components";
import { ReviewForm } from "@/domain/review/components";
import {
  useEditReviewMutation,
  useReviewQuery,
} from "@/domain/review/hooks/query";

export default function ReviewEdit() {
  const {
    query: { theater, reviewId },
  } = useNextRouter();

  const { data } = useReviewQuery(reviewId as string);
  const { mutate: editReview } = useEditReviewMutation();

  return (
    <>
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

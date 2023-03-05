import Image from "next/image";
import { useNextRouter } from "@/hooks/useNextRouter";
import {
  Text,
  Rating,
  Divider,
  LikeButton,
  MainHeader,
  Container,
} from "@/components";
import { ReviewHeader, Reviewer } from "@/domain/review/components";
import { CommentForm, CommentList } from "@/domain/comment/components";
import {
  useCreateReviewLikeMutation,
  useDeleteReviewLikeMutation,
  useReviewQuery,
} from "@/domain/review/hooks/query";
import { useCreateCommentMutation } from "@/domain/comment/hooks/query";

export default function Review() {
  const router = useNextRouter();
  const {
    query: { name: theaterName, reviewId },
  } = router;

  const { data } = useReviewQuery(reviewId as string);
  const {
    nickname,
    floor,
    section,
    seatRow,
    seatNumber,
    rating,
    content,
    likeAmount,
    likeChecked,
    createdAt,
    images,
    userId,
  } = data;

  const { mutate: createReviewLike } = useCreateReviewLikeMutation(
    reviewId as string
  );
  const { mutate: deleteReviewLike } = useDeleteReviewLikeMutation(
    reviewId as string
  );
  const { mutate: createComment } = useCreateCommentMutation(
    reviewId as string
  );

  const handleLikeButtonClick = () => {
    if (likeChecked) {
      deleteReviewLike(reviewId as string);
    } else {
      createReviewLike(reviewId as string);
    }
  };

  return (
    <>
      <MainHeader />
      <ReviewHeader
        seat={{
          theater: theaterName as string,
          floor,
          section,
          seatRow,
          seatNumber,
        }}
      />
      <Container className="flex flex-col gap-2">
        <Reviewer nickname={nickname} createdAt={createdAt} userId={userId} />
        <Rating value={rating} />
        <div className="flex overflow-x-auto gap-2">
          {images?.map((imageUrl) => (
            <Image
              key={imageUrl}
              src={imageUrl}
              alt="좌석 시야"
              width={500}
              height={500}
            />
          ))}
        </div>
        <Text>{content}</Text>
        <LikeButton liked={likeChecked} onClick={handleLikeButtonClick}>
          {likeAmount}
        </LikeButton>

        <Divider />

        <CommentForm onSubmit={createComment} />
        <CommentList />
      </Container>
    </>
  );
}

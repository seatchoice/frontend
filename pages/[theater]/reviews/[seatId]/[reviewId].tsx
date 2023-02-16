import Image from "next/image";

import { Text, Rating, Divider, LikeButton } from "@/components";
import { ReviewHeader } from "@/domain/review/components";
import { CommentForm, Comment } from "@/domain/comment/components";
import { getDateDiffTextFromNow } from "@/utils/date";
import { useNextRouter } from "@/hooks/useNextRouter";
import { useReviewQuery } from "@/domain/review/hooks/query";
import {
  useCreateReviewLikeMutation,
  useDeleteReviewLikeMutation,
} from "@/domain/review/hooks/query";

const commentListMockData = [
  {
    id: 1,
    content: "폼 미쳤네요",
    updatedAt: "20230203",
    nickname: "코카콜라제로",
    likeAmount: 7,
  },
  {
    id: 2,
    content: "상석이네요",
    updatedAt: "20230204",
    nickname: "펩시제로",
    likeAmount: 7,
  },
];

export default function Review() {
  const router = useNextRouter();
  const {
    query: { theater, reviewId },
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
  } = data.data;

  const { mutate: createReviewLike } = useCreateReviewLikeMutation(
    reviewId as string
  );
  const { mutate: deleteReviewLike } = useDeleteReviewLikeMutation(
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
    <div className="flex flex-col gap-2">
      <ReviewHeader seat={{ theater, floor, section, seatRow, seatNumber }} />
      <div className="flex items-center gap-2">
        <Image
          src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          alt="프로필 사진"
          width={24}
          height={24}
          className="w-6 h-6 rounded-full"
        />
        <span>{nickname}</span>
        <Text className="text-sm text-gray-500">
          <time dateTime={createdAt} title={createdAt}>
            {getDateDiffTextFromNow(new Date(createdAt))}전
          </time>
        </Text>
      </div>
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

      <CommentForm />
      {commentListMockData.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

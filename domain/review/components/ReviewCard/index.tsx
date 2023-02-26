import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { tw } from "@/utils/tailwindMerge";
import { Text, Rating, LikeButton } from "@/components";

type ReviewCardProps<T extends React.ElementType> = Component<T> & {
  review: ReviewWithThumbnail;
};

export function ReviewCard({
  review,
  className,
  children,
  ...props
}: ReviewCardProps<"div">) {
  const { asPath } = useRouter();
  const {
    reviewId,
    floor,
    section,
    seatRow,
    seatNumber,
    likeAmount,
    rating,
    thumbnail,
    content,
  } = review;
  return (
    <div
      className={tw(
        "flex flex-col sm:flex-row gap-4 p-4 rounded-lg border border-gray-300 dark:border-gray-600",
        className
      )}
      {...props}
    >
      {thumbnail && (
        <Image
          src={thumbnail}
          alt="좌석 시야"
          width={300}
          height={300}
          className="rounded-md"
        />
      )}
      <div className="flex flex-col justify-center gap-2 px-2">
        <Text as="h4">
          {floor}층 {section}구역 {seatRow}열 {seatNumber}번
        </Text>
        <Rating value={rating} />
        <LikeButton disabled>{likeAmount}</LikeButton>
        <Text>{content}</Text>
        <Link
          href={`${asPath}/${reviewId}`}
          className="p-3 px-6 bg-primary-200 text-primary-900 dark:text-primary-200 dark:bg-primary-900 rounded-lg font-semibold"
        >
          리뷰 자세히 보기 →
        </Link>
      </div>
    </div>
  );
}

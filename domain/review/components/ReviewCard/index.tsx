import Link from "next/link";
import Image from "next/image";

import { tw } from "@/utils/tailwindMerge";
import { useNextRouter } from "@/hooks/useNextRouter";
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
  const {
    asPath,
    query: { name },
  } = useNextRouter();
  const [currentPath] = asPath.split("?");
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
    <Link href={`${currentPath}/${reviewId}?name=${name}`}>
      <div
        className={tw(
          "flex flex-col sm:flex-row gap-4 p-6 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-light-fg hover:dark:bg-dark-fg hover:-translate-y-2 duration-500",
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
        <div className="flex flex-col justify-center gap-2 px-6">
          <Text as="h4">
            {floor}층 {section}구역 {seatRow}열 {seatNumber}번
          </Text>
          <Rating value={rating} />
          <Text>{content}</Text>
          <LikeButton disabled>{likeAmount}</LikeButton>
        </div>
      </div>
    </Link>
  );
}

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";

import { Text, Rating, Icon } from "@/components";
import { ReviewHeader, ReviewCard } from "@/domain/review/components";
import { useReviewListQuery } from "@/domain/review/hooks/query";
import useIntersectionObserver from "@/domain/search/hooks/useObserver";
import { useNextRouter } from "@/hooks/useNextRouter";

export default function ReviewList() {
  const {
    query: { theater, seatId },
  } = useNextRouter();
  const { data, fetchNextPage, hasNextPage, isFetching } = useReviewListQuery(
    seatId as string
  );
  const reviewList = useMemo(
    () => (data ? data.pages.flatMap(({ content }) => content) : []),
    [data]
  );
  const [{ floor, section, seatRow, seatRating }] = reviewList;
  const thumbnailList = reviewList
    .filter(({ thumbnail }) => thumbnail)
    .map(({ thumbnail }) => thumbnail);

  const { setTarget } = useIntersectionObserver({
    onIntersect: ([{ isIntersecting }]) =>
      isIntersecting && hasNextPage && !isFetching && fetchNextPage(),
  });

  return (
    <>
      <ReviewHeader
        seat={{ theater: theater as string, floor, section, seatRow }}
      />
      <ul className="flex justify-evenly gap-2 p-4 bg-light-fg dark:bg-dark-fg rounded-lg">
        <li className="flex flex-col items-center px-2">
          <Text>리뷰 개수</Text>
          <Text>{reviewList?.length}</Text>
        </li>
        <li className="flex flex-col items-center px-2">
          <Text>평균 별점</Text>
          <Rating value={seatRating} />
        </li>
      </ul>
      <Text as="h3">시야 사진</Text>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory">
        {thumbnailList.length ? (
          thumbnailList.map((thumbnail) => (
            <Image
              key={thumbnail}
              src={thumbnail}
              alt="좌석 리뷰 사진"
              width={250}
              height={250}
            />
          ))
        ) : (
          <div>등록된 이미지가 없습니다</div>
        )}
      </div>
      <Text as="h3">리뷰 목록</Text>
      <Link
        href={`/${theater}/post`}
        className="flex flex-col justify-center items-center gap-2 w-full p-4 bg-primary-100 dark:bg-primary-500/50 border-primary-300 border-2 rounded-lg font-semibold"
      >
        <Icon as="plus" className="fill-primary-300" />
        <Text>{theater} 리뷰 작성하기</Text>
      </Link>
      <section className="flex flex-col gap-4">
        {reviewList?.map((review) => (
          <ReviewCard key={review.reviewId} review={review} />
        ))}
        {isFetching && <div>Loading...</div>}
      </section>
      <div ref={setTarget} className="h-2"></div>
    </>
  );
}

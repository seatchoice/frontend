import Link from "next/link";
import { useMemo } from "react";

import { useNextRouter } from "@/hooks/useNextRouter";
import {
  Text,
  Rating,
  Icon,
  MainHeader,
  SSRSuspense,
  Loading,
} from "@/components";
import {
  ReviewHeader,
  ReviewCard,
  ReviewImageList,
  ReviewImageSkeleton,
  ReviewCardSkeleton,
} from "@/domain/review/components";
import { useReviewListQuery } from "@/domain/review/hooks/query";
import useIntersectionObserver from "@/domain/search/hooks/useObserver";

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
  const [{ floor, section, seatRow, seatNumber, seatRating }] = reviewList;

  const { setTarget } = useIntersectionObserver({
    onIntersect: ([{ isIntersecting }]) =>
      isIntersecting && hasNextPage && !isFetching && fetchNextPage(),
  });

  return (
    <>
      <MainHeader />
      <ReviewHeader
        seat={{ theater: theater as string, floor, section, seatRow }}
      />
      <div className="flex flex-col gap-4">
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
        <SSRSuspense fallback={<ReviewImageSkeleton />}>
          <ReviewImageList />
        </SSRSuspense>
        <Text as="h3">리뷰 목록</Text>
        <Link
          href={{
            pathname: `/${theater}/post`,
            query: { floor, section, seatRow, seatNumber },
          }}
          className="flex flex-col justify-center items-center gap-2 w-full p-4 bg-primary-100 dark:bg-primary-500/50 rounded-lg font-semibold"
        >
          <Icon as="plus" className="fill-primary-300" />
          <Text>{theater} 리뷰를 남겨주세요</Text>
        </Link>
        <section className="flex flex-col gap-6">
          <SSRSuspense fallback={<ReviewCardSkeleton />}>
            {reviewList?.map((review) => (
              <ReviewCard key={review.reviewId} review={review} />
            ))}
          </SSRSuspense>
          {isFetching && <Loading content="리뷰 불러오는 중.." />}
        </section>
        <div ref={setTarget} className="h-2"></div>
      </div>
    </>
  );
}

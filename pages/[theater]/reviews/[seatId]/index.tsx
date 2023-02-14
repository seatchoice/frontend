import { useRouter } from "next/router";

import { Text, Rating, Button, Icon } from "@/components";
import { ReviewHeader, ReviewCard } from "@/domain/review/components";

const reviewListMockData = {
  totalRating: 4.5,
  reviewList: [
    {
      id: 1,
      floor: 1,
      section: "A",
      row: 2,
      seatNumber: 3,
      rating: 5,
      content: "리뷰 내용",
      thumbnail:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      likeAmount: 7,
    },
    {
      id: 2,
      floor: 1,
      section: "A",
      row: 2,
      seatNumber: 3,
      rating: 5,
      content: "리뷰 내용",
      thumbnail:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      likeAmount: 7,
    },
    {
      id: 3,
      floor: 1,
      section: "A",
      row: 2,
      seatNumber: 3,
      rating: 5,
      content: "리뷰 내용",
      thumbnail:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      likeAmount: 7,
    },
    {
      id: 4,
      floor: 1,
      section: "A",
      row: 2,
      seatNumber: 3,
      rating: 5,
      content: "리뷰 내용",
      thumbnail:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      likeAmount: 7,
    },
    {
      id: 5,
      floor: 1,
      section: "A",
      row: 2,
      seatNumber: 3,
      rating: 5,
      content: "리뷰 내용",
      thumbnail:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      likeAmount: 7,
    },
  ],
};

export default function ReviewList() {
  const {
    query: { theater, seatId },
  } = useRouter();
  const { reviewList, totalRating } = reviewListMockData;
  const [{ floor, section, row }] = reviewList;
  return (
    <>
      <ReviewHeader seat={{ theater, floor, section, row }} />
      <ul className="flex justify-evenly gap-2 p-4 bg-light-fg dark:bg-dark-fg rounded-lg">
        <li className="flex flex-col items-center px-2">
          <Text>리뷰 개수</Text>
          <Text>{reviewList.length}</Text>
        </li>
        <li className="flex flex-col items-center px-2">
          <Text>평균 별점</Text>
          <Rating value={totalRating} />
        </li>
      </ul>
      <Text as="h3">시야 사진</Text>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory">
        <img
          src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          alt="좌석 시야"
          className="rounded-md object-cover h-52"
        />
        <img
          src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          alt="좌석 시야"
          className="rounded-md object-cover h-52"
        />
        <img
          src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          alt="좌석 시야"
          className="rounded-md object-cover h-52"
        />
        <img
          src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          alt="좌석 시야"
          className="rounded-md object-cover h-52"
        />
        <img
          src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          alt="좌석 시야"
          className="rounded-md object-cover h-52"
        />
        <img
          src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          alt="좌석 시야"
          className="rounded-md object-cover h-52"
        />
        <img
          src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          alt="좌석 시야"
          className="rounded-md object-cover h-52"
        />
        <img
          src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          alt="좌석 시야"
          className="rounded-md object-cover h-52"
        />
      </div>
      <Text as="h3">리뷰 목록</Text>
      <Button className="flex flex-col justify-center items-center w-full dark:bg-primary-500/50 border-primary-300 border-2">
        <Icon as="plus" className="fill-primary-300" width={40} height={40} />
        <Text>{theater} 리뷰 작성하기</Text>
      </Button>
      <section className="flex flex-col gap-4">
        {reviewList.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </section>
    </>
  );
}

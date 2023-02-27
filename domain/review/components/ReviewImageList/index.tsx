import Link from "next/link";
import Image from "next/image";
import { useNextRouter } from "@/hooks/useNextRouter";
import { useReviewImageListQuery } from "../../hooks/query";

export function ReviewImageList() {
  const {
    query: { seatId },
    asPath,
  } = useNextRouter();
  const { data: thumbnailList } = useReviewImageListQuery(seatId as string);
  return (
    <section className="flex gap-4 overflow-x-auto snap-x snap-mandatory">
      {thumbnailList.map(({ reviewId, imageUrl }) => (
        <Link key={reviewId} href={`${asPath}/${reviewId}`}>
          <Image
            src={imageUrl}
            alt="좌석 리뷰 사진"
            width={250}
            height={250}
            className="rounded-lg hover:scale-105 duration-500"
          />
        </Link>
      ))}
    </section>
  );
}
